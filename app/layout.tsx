import type { Metadata } from "next";
import { Playpen_Sans } from "next/font/google";
import "./globals.css";

const playpenSans = Playpen_Sans({
  variable: "--font-playpen",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EmployraHQ — HR Infrastructure Platform for Modern Companies",
  description:
    "EmployraHQ is a centralized HR management platform that enables organizations to manage employees, employment records, HR workflows, and internal documentation from a single platform.",
  keywords: "HR software, HR management, employee management, document vault, HR platform, Africa HR",
  openGraph: {
    title: "EmployraHQ — HR Infrastructure Platform",
    description:
      "Replace fragmented HR processes with a centralized, secure, and scalable HR platform built for modern organizations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playpenSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
