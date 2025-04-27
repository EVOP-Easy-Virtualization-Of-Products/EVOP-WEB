import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import type { Viewport } from "next";

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
    "Cyber Security",
    "Web Development",
    "Application Development",
    "Virtualization Technology",
  ],
  authors: [{ name: "EVOP Tech", url: "https://evoptech.com" }],
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
  metadataBase: new URL("https://evoptech.com"),
  alternates: {
    canonical: "https://evoptech.com",
  },
  openGraph: {
    title: "EVOP Tech - Easy Virtualization Of Products Technology",
    description:
      "EVOP Tech builds innovative websites and applications for startups, offering robust cyber security solutions to empower your business.",
    url: "https://evoptech.com",
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
    google: "your-google-site-verification-code", // Add if available
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
              url: "https://evoptech.com",
              logo: "https://evoptech.com/logo.svg",
              description:
                "EVOP Tech is a software company specializing in website and application development for startups, with a focus on cyber security solutions.",
              sameAs: [
                "https://twitter.com/evoptech",
                // Add other social profiles
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@evoptech.com",
                contactType: "Customer Service",
              },
            }),
          }}
        />
        {/* Matomo Analytics (deferred loading) */}
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
      </head>
      <body
        className="font-plus-jakarta text-white min-h-screen bg-black"
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}