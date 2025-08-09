import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Correcting font import based on your new code
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Add the 'icons' property here
export const metadata: Metadata = {
  title: "PAWPAL",
  description: "Your Pet's Personal AI Assistant",
  icons: {
    icon: '/pawpal-circle-logo.png', // Assumes 'pawpal-logo.ico' is in your /public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* 2. The manual <head> tag has been removed. Next.js handles this now. */}
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
        <Analytics /> {/* Vercel Analytics is usually placed just before the closing body tag */}
        <Script crossOrigin="anonymous" src="//unpkg.com/same-runtime/dist/index.global.js" />
      </body>
    </html>
  );
}