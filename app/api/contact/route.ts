import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    // Honeypot field - bots fill this, real users don't
    if (body.company) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactRecipient = process.env.CONTACT_RECIPIENT_EMAIL;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        {
          error:
            "Supabase credentials are not configured yet in .env.local. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
        },
        { status: 503 }
      );
    }

    if (!resendApiKey || !contactRecipient) {
      return NextResponse.json(
        {
          error:
            "Email credentials are not configured yet in .env.local. Please add RESEND_API_KEY and CONTACT_RECIPIENT_EMAIL.",
        },
        { status: 503 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("messages").insert([
      {
        name,
        email,
        message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      const isConnectionError =
        error.message?.includes("fetch failed") ||
        error.message?.includes("TypeError") ||
        error.message?.includes("Failed to fetch");

      return NextResponse.json(
        {
          error: isConnectionError
            ? "Database connection failed. Please check your Supabase project status."
            : error.message || "Failed to save message to database.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const { error: emailError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: [contactRecipient],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (emailError) {
      console.error("Resend email error:", emailError);
      return NextResponse.json(
        {
          error: `Message was saved, but the notification email could not be sent: ${emailError.message}`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent and saved successfully." },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
