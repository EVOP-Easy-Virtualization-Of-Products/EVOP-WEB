import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | EVOP Tech",
  description: "Learn how EVOP Tech collects, uses, and protects your personal information in accordance with our privacy policy.",
  openGraph: {
    title: "Privacy Policy | EVOP Tech",
    description: "Learn how EVOP Tech collects, uses, and protects your personal information in accordance with our privacy policy.",
    url: "https://evop.tech/privacy-policy",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "EVOP Tech Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | EVOP Tech",
    description: "Learn how EVOP Tech collects, uses, and protects your personal information in accordance with our privacy policy.",
    images: ["/og-image.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0d0d12] text-white pt-10">
        
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#4AC3F3] mb-8">Privacy Policy</h1>
        <section className="prose prose-invert max-w-none">
          <p className="text-gray-300">Last updated: May 8, 2025</p>
          <p className="text-gray-300">
            At EVOP Tech, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Information We Collect</h2>
          <p className="text-gray-300">
            We may collect personal information such as your name, email address, and contact details when you submit forms or interact with our website. We also collect non-personal data like browsing behavior via analytics tools.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">How We Use Your Information</h2>
          <p className="text-gray-300">
            Your information is used to provide and improve our services, respond to inquiries, and send marketing communications (with your consent). We do not sell or share your data with third parties except as required by law.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Data Security</h2>
          <p className="text-gray-300">
            We implement robust security measures to protect your data, including encryption and secure servers. However, no method of transmission over the internet is 100% secure.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Your Rights</h2>
          <p className="text-gray-300">
            You have the right to access, correct, or delete your personal information. Contact us at <a href="mailto:contact@evop.tech" className="text-[#4AC3F3] hover:underline">contact@evop.tech</a> to exercise these rights.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Contact Us</h2>
          <p className="text-gray-300">
            For questions about this Privacy Policy, please contact us at <a href="mailto:contact@evop.tech" className="text-[#4AC3F3] hover:underline">contact@evop.tech</a>.
          </p>
        </section>
      </main>
      
    </div>
  );
}