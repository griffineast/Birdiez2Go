import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/inter-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-inter",
});

const playfair = localFont({
  src: [
    { path: "./fonts/playfair-display-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/playfair-display-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Birdiez2Go — The Ultimate Golf Experience, Delivered",
  description:
    "Birdiez2Go brings the ultimate mobile golf simulator experience to your event. Premium packages for parties, corporate events, and private gatherings. Golf anytime, anywhere.",
  keywords: [
    "mobile golf simulator",
    "golf simulator rental",
    "event entertainment",
    "corporate golf event",
    "party golf simulator",
  ],
  openGraph: {
    title: "Birdiez2Go — The Ultimate Golf Experience, Delivered",
    description:
      "Premium mobile golf simulator experiences for any event. Elevate your event, one swing at a time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
