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

const isLocalhost = () => {
  // Server-side: Check NODE_ENV
  if (typeof window === "undefined") {
    return process.env.NODE_ENV === "development";
  }
  // Client-side: Check hostname
  return (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  );
};

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
        <link
          rel="preload"
          href="/fonts/plus-jakarta-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Structured Data (JSON-LD) for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "EVOP Tech",
              url: "https://evop.tech",
              logo: "https://evop.tech/logo.svg",
              description:
                "EVOP Tech is a software company specializing in website and application development for startups, with a focus on cyber security solutions.",
              sameAs: [
                "https://twitter.com/evoptech",
                // Add other social profiles
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@evop.tech", // Update if email changes
                contactType: "Customer Service",
              },
            }),
          }}
        />
        {/* Matomo Analytics (only in production) */}
        {!isLocalhost() && (
          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
                var _paq = window._paq = window._paq || [];
                _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
                _paq.push(['trackPageView']);
                _paq.push(['enableLinkTracking']);
                (function() {
                  var u="https://dis25y.stackhero-network.com/";
                  _paq.push(['setTrackerUrl', u+'matomo.php']);
                  _paq.push(['setSiteId', '1']);
                  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                  g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
                })();
              `,
            }}
          />
        )}
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