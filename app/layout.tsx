import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${jakarta.variable} ${jetbrains.variable} font-sans antialiased bg-[#090b10] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}