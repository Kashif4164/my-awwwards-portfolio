import type { Metadata } from "next";
import { Inter, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Kashif | GenAI & Full-Stack Engineer",
    template: "%s | Kashif Portfolio",
  },
  description:
    "GenAI and Full-Stack engineer portfolio focused on immersive web experiences, agentic workflows, and scalable architectures.",
  keywords: [
    "creative developer",
    "portfolio",
    "frontend developer",
    "GenAI engineer",
    "Full-stack",
    "next.js",
  ],
  openGraph: {
    title: "Kashif | GenAI & Full-Stack Engineer",
    description:
      "GenAI and Full-Stack engineer portfolio focused on immersive web experiences, agentic workflows, and scalable architectures.",
    url: "https://example.com",
    siteName: "Kashif Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kashif portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashif | GenAI & Full-Stack Engineer",
    description:
      "GenAI and Full-Stack engineer portfolio focused on immersive web experiences, agentic workflows, and scalable architectures.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} ${playfair.variable} font-sans`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}