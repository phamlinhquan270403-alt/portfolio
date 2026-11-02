import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

// Free stand-in for Helvetica Neue (the reference portfolio's typeface).
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  style: ["normal", "italic"],
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Pham Linh Quan / Video Editor",
  description:
    "Video editor and motion designer from Da Nang, Vietnam. Founder of BeatFrame (29.2M views). Remote only.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interTight.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
