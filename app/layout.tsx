import { Navbar } from "@/components/navbar/Navbar";
import { getPostById } from "@/lib/blog";
import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const Footer = dynamic(
  () => import("@/components/footer/Footer").then((mod) => ({ default: mod.Footer })),
  {
    loading: () => <div className="h-40" />,
  }
);

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
  display: "swap",
});

const defaultMetadata: Metadata = {
  title: {
    default: "EVOP TECH - Easy Virtualization Of Products Technology",
    template: "%s | EVOP TECH",
  },
  description:
    "EVOP TECH builds innovative websites and applications for startups, offering robust cyber security solutions to empower your business.",
  keywords: [
    "EVOP TECH",
    "Software Company",
    "Startup Solutions",
    "Cyber Security for Startups",
    "Web Development Services",
    "Application Development for Startups",
    "Virtualization Technology Solutions",
    "Innovative Software Solutions",
  ],
  authors: [{ name: "EVOP TECH", url: "https://evop.tech" }],
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
    title: "EVOP TECH - Easy Virtualization Of Products Technology",
    description:
      "EVOP TECH builds innovative websites and applications for startups, offering robust cyber security solutions to empower your business.",
    url: "https://evop.tech",
    siteName: "EVOP TECH",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EVOP TECH - Software and Cyber Security Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EVOP TECH - Easy Virtualization Of Products Technology",
    description:
      "EVOP TECH builds innovative websites and applications for startups, offering robust cyber security solutions to empower your business.",
    creator: "@evoptech",
    site: "@evoptech",
    images: ["/og-image.jpg"],
  },
  applicationName: "EVOP TECH",
  appleWebApp: {
    title: "EVOP TECH",
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
    google: "new-verification-code-for-evop-tech",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ id?: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  if (!id) {
    return defaultMetadata;
  }

  const post = await getPostById(id);
  if (!post) {
    return {
      ...defaultMetadata,
      title: "Post Not Found | EVOP TECH",
      description: "The requested blog post could not be found.",
    };
  }

  let publishedTime: string;
  let modifiedTime: string;
  try {
    publishedTime = new Date(post.date).toISOString();
    modifiedTime = post.modified ? new Date(post.modified).toISOString() : publishedTime;
  } catch (error) {
    console.error("Invalid date format in layout:", { date: post.date, modified: post.modified });
    return {
      ...defaultMetadata,
      title: "Error | EVOP TECH",
      description: "Invalid date format for the blog post.",
    };
  }

  return {
    ...defaultMetadata,
    title: post.title,
    description: post.description || defaultMetadata.description,
    alternates: {
      canonical: `https://evop.tech/blog/${id}`,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: post.title,
      description: post.description || defaultMetadata.description,
      url: `https://evop.tech/blog/${id}`,
      type: "article",
      publishedTime: publishedTime,
      modifiedTime: modifiedTime,
      images: [
        {
          url: post.image || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: post.title,
      description: post.description || defaultMetadata.description,
      images: [post.image || "/og-image.jpg"],
    },
    other: {
      "article:published_time": publishedTime,
      "article:modified_time": modifiedTime,
      "dcterms.created": publishedTime,
      "dcterms.modified": modifiedTime,
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <meta name="google-site-verification" content="new-verification-code-for-evop-tech" />
      </head>
      <body className="font-plus-jakarta text-white min-h-screen bg-white" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Suspense fallback={<div className="h-40" />}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}