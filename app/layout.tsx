import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar/Navbar';
import type { Metadata } from 'next';
import type { Viewport } from 'next'

 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: 'black',
}
// Define the font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
});

// Define global metadata
export const metadata: Metadata = {
  title: 'EVOP Tech - Easy Virtualization Of Products Technology',
  description: 'EVOP Tech is Software Company that serve website or application for your startup, where it has lot of good benefits for the user. We Offering Cyber Security Assistant in other hands..',
  keywords: 'EVOP TECH, Easy Virtualization Of Products, Software House, Software Company, Startup',
  authors: [{ name: 'evop tech' }],
  robots: 'index, follow',
  metadataBase: new URL('https://evop.tech'), // Base URL for absolute URLs
  openGraph: {
    title: 'EVOP Tech - Easy Virtualization Of Products Technology',
    description: 'EVOP Tech is Software Company that serve website or application for your startup, where it has lot of good benefits for the user. We Offering Cyber Security Assistant in other hands..',
    url: 'https://evop.tech',
    siteName: 'evop tech',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVOP Tech - Easy Virtualization Of Products Technology',
    description: 'EVOP Tech is Software Company that serve website or application for your startup, where it has lot of good benefits for the user. We Offering Cyber Security Assistant in other hands..',
    site: '@evoptech', // Optional: Add your Twitter handle if applicable
  },
  applicationName: 'evop tech',
  appleWebApp: {
    title: 'evop tech',
  },

  icons: {
    icon: '/favicon.ico',
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
        {/* Matomo analytics script - still works in <head> */}
        <script
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
      <body className="font-plus-jakarta text-white min-h-screen" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}