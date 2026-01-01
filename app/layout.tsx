import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import "./globals.css";

const spectral = Spectral({ 
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-spectral",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio - Jad Mintun",
  description: "Portfolio website for Jad Mintun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spectral.variable} font-sans`}>{children}</body>
    </html>
  );
}

