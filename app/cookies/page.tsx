import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cookies | EVOP Tech",
  description: "Understand how EVOP Tech uses cookies to enhance your browsing experience and how you can manage them.",
  openGraph: {
    title: "Cookies | EVOP Tech",
    description: "Understand how EVOP Tech uses cookies to enhance your browsing experience and how you can manage them.",
    url: "https://evop.tech/cookies",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "EVOP Tech Cookies Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies | EVOP Tech",
    description: "Understand how EVOP Tech uses cookies to enhance your browsing experience and how you can manage them.",
    images: ["/og-image.jpg"],
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen pt-10 bg-[#0d0d12] text-white ">
       
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#4AC3F3] mb-8">Cookies Policy</h1>
        <section className="prose prose-invert max-w-none">
          <p className="text-gray-300">Last updated: May 8, 2025</p>
          <p className="text-gray-300">
            EVOP Tech uses cookies to improve your experience on our website. This Cookies Policy explains what cookies are, how we use them, and how you can control them.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">What Are Cookies?</h2>
          <p className="text-gray-300">
            Cookies are small text files stored on your device that help us analyze website usage, remember preferences, and provide personalized content.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Types of Cookies We Use</h2>
          <ul className="text-gray-300 list-disc pl-5">
            <li>Essential Cookies: Required for website functionality.</li>
            <li>Analytics Cookies: Track usage to improve our services.</li>
            <li>Marketing Cookies: Deliver tailored advertisements.</li>
          </ul>
          <h2 className="text-xl font-semibold text-white mt-6">Managing Cookies</h2>
          <p className="text-gray-300">
            You can disable cookies through your browser settings, but this may affect website functionality. For instructions, visit your browser’s help page.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Third-Party Cookies</h2>
          <p className="text-gray-300">
            We use third-party services like Matomo Analytics, which may set cookies. These are governed by their respective privacy policies.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Contact Us</h2>
          <p className="text-gray-300">
            For questions about our Cookies Policy, contact us at <a href="mailto:contact@evop.tech" className="text-[#4AC3F3] hover:underline">contact@evop.tech</a>.
          </p>
        </section>
      </main>
    </div>
  );
}