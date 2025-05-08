import { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Cyber Security | EVOP Tech",
  description: "Protect your digital assets with EVOP Tech’s advanced cybersecurity solutions, ensuring safety and peace of mind.",
  openGraph: {
    title: "Cyber Security | EVOP Tech",
    description: "Protect your digital assets with EVOP Tech’s advanced cybersecurity solutions, ensuring safety and peace of mind.",
    url: "https://evop.tech/services/cyber-security",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "EVOP Tech Cyber Security" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Security | EVOP Tech",
    description: "Protect your digital assets with EVOP Tech’s advanced cybersecurity solutions, ensuring safety and peace of mind.",
    images: ["/og-image.jpg"],
  },
};

export default function CyberSecurityPage() {
  return (
    <div className="min-h-screen bg-[#f8fafb] text-[#0d0d12] ">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0d0d12] mb-8">Cyber Security</h1>
        <section className="prose max-w-none">
          <p className="text-gray-600">
            EVOP Tech offers robust cybersecurity solutions to safeguard your business from digital threats and ensure data integrity.
          </p>
          <h2 className="text-xl font-semibold text-[#0d0d12] mt-6">Our Approach</h2>
          <p className="text-gray-600">
            We provide comprehensive security services to protect your digital assets. Our offerings include:
          </p>
          <ul className="text-gray-600 list-disc pl-5">
            <li>Threat Detection: Real-time monitoring for potential risks.</li>
            <li>Vulnerability Assessments: Identifying and fixing weaknesses.</li>
            <li>Secure Development: Building apps with security in mind.</li>
            <li>Incident Response: Rapid action to mitigate breaches.</li>
          </ul>
          <h2 className="text-xl font-semibold text-[#0d0d12] mt-6">Why Choose Us?</h2>
          <p className="text-gray-600">
            Our cybersecurity experts use advanced tools and strategies to keep your business secure, giving you peace of mind.
          </p>
          <h2 className="text-xl font-semibold text-[#0d0d12] mt-6">Get Started</h2>
          <p className="text-gray-600">
            Ready to secure your business? Contact us at <a href="mailto:contact@evop.tech" className="text-blue-500 hover:underline">contact@evop.tech</a> to discuss your needs.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}