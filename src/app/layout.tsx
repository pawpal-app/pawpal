// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ✅ 1. CHECK THIS IMPORT: Make sure this line exists and the path is correct.
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PawPal",
  description: "Your Pet's Personal AI Assistant",
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