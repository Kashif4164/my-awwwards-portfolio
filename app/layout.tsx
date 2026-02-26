import type { Metadata } from "next";
// 1. Import the font
import { Inter, Oswald } from "next/font/google"; 
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

// 2. Configure the font variable
const oswald = Oswald({ 
  subsets: ["latin"], 
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "My Creative Portfolio",
  description: "Awwwards-winning digital experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Add the variable here so Tailwind can find it */}
      <body className={`${inter.className} ${oswald.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}