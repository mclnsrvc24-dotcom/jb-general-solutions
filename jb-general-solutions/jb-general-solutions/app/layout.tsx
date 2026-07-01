import type { Metadata } from "next";
import { Barlow_Condensed, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "JB General Solutions Service | Handyman, Carpentry & Masonry — Killeen, TX",
  description:
    "Licensed and insured handyman, carpentry, and masonry services in Killeen and Central Texas. Windows & doors, drywall repair, trim molding, electrical, plumbing, and masonry work.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "JB General Solutions Service",
    description:
      "Handyman, carpentry, and masonry services in Killeen and Central Texas.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-ink text-bone antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
