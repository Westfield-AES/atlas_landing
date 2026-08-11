import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { getSiteUrl } from "@/lib/env/public";

import "./globals.css";
import "./landing.css";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "Atlas: Evidence-led investor discovery",
    template: "%s · Atlas",
  },
  description: "Discover credible African businesses that are actively raising through structured facts, scoped checks, and consent-based introductions.",
  applicationName: "Atlas",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icons/atlas-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/atlas-icon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/icons/atlas-icon-180.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "Atlas",
    title: "Atlas: Evidence-led investor discovery",
    description: "Find credible African businesses. Understand the signal. Start the right conversation.",
  },
  twitter: {
    card: "summary",
    title: "Atlas: Evidence-led investor discovery",
    description: "Find credible African businesses. Understand the signal. Start the right conversation.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F8F7" },
    { media: "(prefers-color-scheme: dark)", color: "#0C1512" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
