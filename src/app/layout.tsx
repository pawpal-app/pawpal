// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Header component using relative path for better build compatibility
import { Header } from "../components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PawPal",
  description: "Your Pet's Personal AI Assistant",
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  icons: {
    icon: [
      {
        url: '/pawpal-circle-logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/pawpal-circle-logo.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: '/pawpal-circle-logo.png',
    apple: [
      {
        url: '/pawpal-circle-logo.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* ✅ 2. CHECK THIS LINE: Make sure <Header /> is the first thing inside the <body> */}
        <Header />
        
        {children}
        
      </body>
    </html>
  );
}