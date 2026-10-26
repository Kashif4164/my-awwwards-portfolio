import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Sheik Mohammed Kashif | Generative AI & Backend Engineer",
    template: "%s | Kashif Portfolio",
  },
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
    "Full-stack",
    "Next.js",
  ],
  authors: [{ name: "Sheik Mohammed Kashif" }],
  openGraph: {
    title: "Sheik Mohammed Kashif | Generative AI Engineer",
    description: "Production LLM architectures, RAG pipelines, and agentic workflows.",
    url: "https://example.com",
    siteName: "Kashif Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheik Mohammed Kashif | Generative AI Engineer",
    description: "Production LLM architectures, RAG pipelines, and agentic workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased bg-[#090b10] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
