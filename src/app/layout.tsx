import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import { getSiteUrl } from "@/lib/env/public";

import "./globals.css";
import "./landing.css";

const manrope = localFont({
  src: "../../public/fonts/manrope-variable.ttf",
  display: "swap",
  variable: "--font-atlas",
  weight: "200 800",
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "Atlas: Where African businesses and investors connect",
    template: "%s · Atlas",
  },
  description:
    "Atlas is a marketplace where African businesses gain visibility and investors discover businesses. Showcase your business, explore profiles, and connect.",
  applicationName: "Atlas",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icons/atlas-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/atlas-icon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/icons/atlas-icon-180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "Atlas",
    title: "Atlas: Where African businesses and investors connect",
    description:
      "A marketplace for African businesses and investors. Showcase your business, discover business profiles, and connect through introductions.",
  },
  twitter: {
    card: "summary",
    title: "Atlas: Where African businesses and investors connect",
    description:
      "A marketplace for African businesses and investors. Showcase your business, discover business profiles, and connect through introductions.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#f8f7f2",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html className={manrope.variable} data-scroll-behavior="smooth" lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
