import { NextResponse } from "next/server";
<<<<<<< HEAD
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
=======

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot field should remain empty in real submissions.
    if (body.company) {
      return NextResponse.json({ ok: true });
    }

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const message = body.message?.trim() || "";
>>>>>>> 7f1e02d0cf5471a8a2782536ada9491d33b2b3a8

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

<<<<<<< HEAD
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
=======
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    if (message.length < 20) {
      return NextResponse.json(
        { error: "Message should be at least 20 characters." },
>>>>>>> 7f1e02d0cf5471a8a2782536ada9491d33b2b3a8
        { status: 400 }
      );
    }

<<<<<<< HEAD
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        {
          error:
            "Supabase credentials are not configured yet in .env.local. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
        },
        { status: 503 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("messages").insert([
      {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to save message to database." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message dispatched and saved successfully." },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected server error occurred." },
=======
    // Replace this with an email provider integration (Resend/SendGrid) using env vars.
    console.info("Contact request", {
      name,
      email,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while sending your message." },
>>>>>>> 7f1e02d0cf5471a8a2782536ada9491d33b2b3a8
      { status: 500 }
    );
  }
}
