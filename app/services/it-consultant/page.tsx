import { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "IT Consultant | EVOP Tech",
  description: "Get expert IT consulting from EVOP Tech to optimize your strategies, infrastructure, and operations for maximum efficiency.",
  openGraph: {
    title: "IT Consultant | EVOP Tech",
    description: "Get expert IT consulting from EVOP Tech to optimize your strategies, infrastructure, and operations for maximum efficiency.",
    url: "https://evop.tech/services/it-consultant",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "EVOP Tech IT Consulting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Consultant | EVOP Tech",
    description: "Get expert IT consulting from EVOP Tech to optimize your strategies, infrastructure, and operations for maximum efficiency.",
    images: ["/og-image.jpg"],
  },
};

export default function ITConsultantPage() {
  return (
    <div className="min-h-screen bg-[#f8fafb] text-[#0d0d12]">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0d0d12] mb-8">IT Consultant</h1>
        <section className="prose max-w-none">
          <p className="text-gray-600">
            EVOP Tech provides expert IT consulting to help businesses optimize their technology strategies and achieve operational excellence.
          </p>
          <h2 className="text-xl font-semibold text-[#0d0d12] mt-6">Our Approach</h2>
          <p className="text-gray-600">
            Our consultants assess your current IT environment and provide tailored recommendations. Services include:
          </p>
          <ul className="text-gray-600 list-disc pl-5">
            <li>IT Strategy: Aligning technology with business goals.</li>
            <li>Infrastructure: Optimizing cloud and on-premises systems.</li>
            <li>Process Improvement: Streamlining operations with automation.</li>
            <li>Training: Empowering your team with IT knowledge.</li>
          </ul>
          <h2 className="text-xl font-semibold text-[#0d0d12] mt-6">Why Choose Us?</h2>
          <p className="text-gray-600">
            Our experienced consultants deliver actionable insights, helping you stay ahead in a rapidly evolving tech landscape.
          </p>
          <h2 className="text-xl font-semibold text-[#0d0d12] mt-6">Get Started</h2>
          <p className="text-gray-600">
            Ready to optimize your IT? Contact us at <a href="mailto:contact@evop.tech" className="text-blue-500 hover:underline">contact@evop.tech</a> for a consultation.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}