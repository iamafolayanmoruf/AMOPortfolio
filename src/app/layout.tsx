import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afolayan Moruf O | Software Developer",
  description:
    "Personal portfolio of Afolayan Moruf O — a passionate software developer building modern web and mobile experiences with React, Next.js, React Native, and more.",
  keywords: [
    "Software Developer",
    "React",
    "Next.js",
    "React Native",
    "Portfolio",
    "Afolayan Moruf",
  ],
  authors: [{ name: "Afolayan Moruf O" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
