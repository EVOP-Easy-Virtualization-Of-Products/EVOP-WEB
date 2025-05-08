import { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
export const metadata: Metadata = {
  title: "Legal | EVOP Tech",
  description: "Review the legal terms and conditions governing the use of EVOP Tech's website and services.",
  openGraph: {
    title: "Legal | EVOP Tech",
    description: "Review the legal terms and conditions governing the use of EVOP Tech's website and services.",
    url: "https://evop.tech/legal",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "EVOP Tech Legal Terms" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal | EVOP Tech",
    description: "Review the legal terms and conditions governing the use of EVOP Tech's website and services.",
    images: ["/og-image.jpg"],
  },
};

export default function LegalPage() {
  return (
    <div className="mt-10 min-h-screen bg-[#0d0d12] text-white">
      <Navbar/>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#4AC3F3] mb-8">Legal</h1>
        <section className="prose prose-invert max-w-none">
          <p className="text-gray-300">Last updated: May 8, 2025</p>
          <p className="text-gray-300">
            This Legal page outlines the terms and conditions for using EVOP Tech’s website and services. By accessing our site, you agree to these terms.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Use of Website</h2>
          <p className="text-gray-300">
            You may use our website for lawful purposes only. Unauthorized use, including reproducing content without permission, is prohibited.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Intellectual Property</h2>
          <p className="text-gray-300">
            All content on this website, including logos and text, is owned by EVOP Tech and protected by intellectual property laws.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Limitation of Liability</h2>
          <p className="text-gray-300">
            EVOP Tech is not liable for damages arising from the use of our website or services, except as required by law.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Governing Law</h2>
          <p className="text-gray-300">
            These terms are governed by the laws of [Your Jurisdiction]. Disputes will be resolved in [Your Jurisdiction] courts.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Contact Us</h2>
          <p className="text-gray-300">
            For legal inquiries, contact us at <a href="mailto:contact@evop.tech" className="text-[#4AC3F3] hover:underline">contact@evop.tech</a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}