import { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Mobile Development | EVOP Tech",
  description: "Build innovative and user-friendly mobile applications for iOS and Android with EVOP Tech to engage your customers on the go.",
  openGraph: {
    title: "Mobile Development | EVOP Tech",
    description: "Build innovative and user-friendly mobile applications for iOS and Android with EVOP Tech to engage your customers on the go.",
    url: "https://evop.tech/services/mobile-development",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "EVOP Tech Mobile Development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Development | EVOP Tech",
    description: "Build innovative and user-friendly mobile applications for iOS and Android with EVOP Tech to engage your customers on the go.",
    images: ["/og-image.jpg"],
  },
};

export default function MobileDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[#f8fafb] text-[#0d0d12]">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0d0d12] mb-8">Mobile Development</h1>
        <section className="prose max-w-none">
          <p className="text-gray-600">
            EVOP Tech delivers high-quality mobile applications for iOS and Android, designed to engage users and drive business growth.
          </p>
          <h2 className="text-xl font-semibold text-[#0d0d12] mt-6">Our Approach</h2>
          <p className="text-gray-600">
            We leverage frameworks like React Native and Flutter to create cross-platform apps with native performance. Our process includes:
          </p>
          <ul className="text-gray-600 list-disc pl-5">
            <li>Ideation: Defining app features and user journeys.</li>
            <li>UI/UX Design: Crafting intuitive and appealing interfaces.</li>
            <li>Development: Building robust and scalable apps.</li>
            <li>Deployment: Publishing to App Store and Google Play.</li>
          </ul>
          <h2 className="text-xl font-semibold text-[#0d0d12] mt-6">Why Choose Us?</h2>
          <p className="text-gray-600">
            Our mobile apps are user-centric, secure, and optimized for performance, helping you connect with customers anytime, anywhere.
          </p>
          <h2 className="text-xl font-semibold text-[#0d0d12] mt-6">Get Started</h2>
          <p className="text-gray-600">
            Ready to launch your mobile app? Contact us at <a href="mailto:contact@evop.tech" className="text-blue-500 hover:underline">contact@evop.tech</a> to start your project.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}