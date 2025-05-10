import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import type { Viewport } from "next";
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Utility function to check if running on localhost
const Footer = dynamic(() => import('@/components/footer/Footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-40" />
})


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap", // Improves font loading performance
});

export const metadata: Metadata = {
  title: {
    default: "EVOP Tech - Easy Virtualization Of Products Technology",
    template: "%s | EVOP Tech",
  },
  description:
    "EVOP Tech builds innovative websites and applications for startups, offering robust cyber security solutions to empower your business.",
  keywords: [
    "EVOP Tech",
    "Software Company",
    "Startup Solutions",
    "Cyber Security for Startups",
    "Web Development Services",
    "Application Development for Startups",
    "Virtualization Technology Solutions",
    "Innovative Software Solutions",
  ],
  authors: [{ name: "EVOP Tech", url: "https://evop.tech" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://evop.tech"),
  alternates: {
    canonical: "https://evop.tech",
  },
  openGraph: {
    title: "EVOP Tech - Easy Virtualization Of Products Technology",
    description:
      "EVOP Tech builds innovative websites and applications for startups, offering robust cyber security solutions to empower your business.",
    url: "https://evop.tech",
    siteName: "EVOP Tech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "EVOP Tech - Software and Cyber Security Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EVOP Tech - Easy Virtualization Of Products Technology",
    description:
      "EVOP Tech builds innovative websites and applications for startups, offering robust cyber security solutions to empower your business.",
    creator: "@evoptech",
    site: "@evoptech",
    images: ["/og-image.jpg"],
  },
  applicationName: "EVOP Tech",
  appleWebApp: {
    title: "EVOP Tech",
    capable: true,
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  verification: {
    google: "new-verification-code-for-evop-tech", // Replace with actual code from Google Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="new-verification-code-for-evop-tech" // Replace with actual code
        />
        {/* Preload critical font */}
     
        {/* Structured Data (JSON-LD) for Organization */}
        <script
          type="application/ld+json"
      
        />
      
      </head>
      <body
        className="font-plus-jakarta text-white min-h-screen bg-white"
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
        <Suspense fallback={<div className="h-40" />}>
        <Footer />
      </Suspense>
   
      </body>
    </html>
  );
}