import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import {
  BRAND_NAME,
  LOGO_PATH,
  SITE_DESCRIPTION,
  SITE_URL,
  createMetadata,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BRAND_NAME,
  ...createMetadata({
    title: "WebFix Experts – AI, Web Development & Digital Solutions",
    description: SITE_DESCRIPTION,
    path: "/",
    image: LOGO_PATH,
  }),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark antialiased scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground selection:bg-brand-blue/30 flex flex-col">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
