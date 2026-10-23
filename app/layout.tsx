import type { Metadata } from "next";
<<<<<<< HEAD
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
=======
import { Inter, Oswald, Playfair_Display } from "next/font/google";
>>>>>>> 7f1e02d0cf5471a8a2782536ada9491d33b2b3a8
import "./globals.css";

<<<<<<< HEAD
const jakarta = Plus_Jakarta_Sans({
=======
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const oswald = Oswald({
>>>>>>> 7f1e02d0cf5471a8a2782536ada9491d33b2b3a8
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Sheik Mohammed Kashif | Generative AI & Backend Engineer",
  description:
    "Portfolio of Sheik Mohammed Kashif - Generative AI & Backend Engineer specializing in RAG architectures, LLM Agents, LangGraph, FastAPI, and GCP.",
  keywords: [
    "Generative AI",
    "LLM Engineer",
    "RAG Architecture",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "Python",
    "Sheik Mohammed Kashif",
    "GCP",
  ],
  authors: [{ name: "Sheik Mohammed Kashif" }],
  openGraph: {
    title: "Sheik Mohammed Kashif | Generative AI Engineer",
    description: "Production LLM architectures, RAG pipelines, and agentic workflows.",
    type: "website",
  },
=======
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
>>>>>>> 7f1e02d0cf5471a8a2782536ada9491d33b2b3a8
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${jakarta.variable} ${jetbrains.variable} font-sans antialiased bg-[#090b10] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen`}
      >
        {children}
=======
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} ${playfair.variable} font-sans`}>
        <SmoothScroll>{children}</SmoothScroll>
>>>>>>> 7f1e02d0cf5471a8a2782536ada9491d33b2b3a8
      </body>
    </html>
  );
}