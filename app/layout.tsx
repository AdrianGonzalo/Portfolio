import type { Metadata } from "next";
import { Urbanist } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400']
})

export const metadata: Metadata = {
  title: "Adrian Landing Page 👨‍💻",
  description: "Landing Page made by Adrian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased`}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
