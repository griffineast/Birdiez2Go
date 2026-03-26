import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
