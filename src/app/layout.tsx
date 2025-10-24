// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Header component using relative path for better build compatibility
import { Header } from "../components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animo",
  description: "Care, Capture, Connect",
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Header />
        
        {children}
        
      </body>
    </html>
  );
}