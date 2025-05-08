import { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
export const metadata: Metadata = {
  title: "Security | EVOP Tech",
  description: "Discover the robust security measures EVOP Tech implements to protect your data and ensure safe digital experiences.",
  openGraph: {
    title: "Security | EVOP Tech",
    description: "Discover the robust security measures EVOP Tech implements to protect your data and ensure safe digital experiences.",
    url: "https://evop.tech/security",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "EVOP Tech Security Measures" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security | EVOP Tech",
    description: "Discover the robust security measures EVOP Tech implements to protect your data and ensure safe digital experiences.",
    images: ["/og-image.jpg"],
  },
};

export default function SecurityPage() {
  return (
    <div className="mt-10 min-h-screen bg-[#0d0d12] text-white">
        <Navbar/>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#4AC3F3] mb-8">Security</h1>
        <section className="prose prose-invert max-w-none">
          <p className="text-gray-300">Last updated: May 8, 2025</p>
          <p className="text-gray-300">
            At EVOP Tech, security is a top priority. We employ industry-leading practices to safeguard your data and ensure the integrity of our services.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Data Protection</h2>
          <p className="text-gray-300">
            We use encryption (e.g., TLS/SSL), secure servers, and regular security audits to protect your personal and business data.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Cybersecurity Services</h2>
          <p className="text-gray-300">
            Our cybersecurity solutions for startups include threat detection, vulnerability assessments, and secure application development.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Compliance</h2>
          <p className="text-gray-300">
            We adhere to global standards like GDPR and CCPA to ensure compliance with data protection regulations.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Incident Response</h2>
          <p className="text-gray-300">
            In the unlikely event of a security breach, we have a robust incident response plan to mitigate risks and notify affected users promptly.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6">Contact Us</h2>
          <p className="text-gray-300">
            For security-related inquiries, contact us at <a href="mailto:contact@evop.tech" className="text-[#4AC3F3] hover:underline">contact@evop.tech</a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}