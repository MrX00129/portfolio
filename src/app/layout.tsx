import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebFix Expert | We Fix. We Build. We Grow Businesses.",
  description: "WebFix Expert provides Website Development, App Development, Digital Marketing, AI Automation, and Business Growth Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark antialiased scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground selection:bg-brand-blue/30 flex flex-col">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
