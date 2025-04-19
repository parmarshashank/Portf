import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "parmarshashank",
  description: "Hehe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${rajdhani.variable} bg-[var(--sl-background)] text-[var(--sl-text-primary)] antialiased selection:bg-[var(--sl-blue-glow)]/30 selection:text-white`}
        suppressHydrationWarning
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
