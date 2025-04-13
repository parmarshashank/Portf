import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shashank | Developer",
  description: "Full-Stack Developer | Solo Leveling Inspired Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-[var(--sl-background)] text-[var(--sl-text-primary)] antialiased selection:bg-[var(--sl-blue-glow)]/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
