import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Website Development | EVOP Tech",
  description: "Create modern, responsive, and dynamic websites with EVOP Tech to enhance your online presence and deliver exceptional user experiences.",
  openGraph: {
    title: "Website Development | EVOP Tech",
    description: "Create modern, responsive, and dynamic websites with EVOP Tech to enhance your online presence and deliver exceptional user experiences.",
    url: "https://evop.tech/services/website-development",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "EVOP Tech Website Development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development | EVOP Tech",
    description: "Create modern, responsive, and dynamic websites with EVOP Tech to enhance your online presence and deliver exceptional user experiences.",
    images: ["/og-image.jpg"],
  },
};

export default function WebsiteDevelopmentPage() {
  return (
    <div className="h-screen bg-[#f8fafb] text-[#0d0d12] mt-16">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0d0d12] mb-8">Website Development</h1>
        <section className="prose max-w-none">
          <p className="text-gray-600">
            At EVOP Tech, we specialize in crafting modern, responsive, and dynamic websites that elevate your brand and engage your audience.
          </p>
          <h2 className="text-xl font-semibold text-[#0d0d12] mt-6">Our Approach</h2>
          <p className="text-gray-600">
            We use cutting-edge technologies like Next.js, React, and Tailwind CSS to build websites that are fast, scalable, and visually stunning. Our process includes:
          </p>
          <ul className="text-gray-600 list-disc pl-5">
            <li>Discovery: Understanding your business goals and audience.</li>
            <li>Design: Creating user-friendly, responsive layouts.</li>
            <li>Development: Building secure and optimized websites.</li>
            <li>Testing: Ensuring cross-browser compatibility and performance.</li>
          </ul>
          <h2 className="text-xl font-semibold text-[#0d0d12] mt-6">Why Choose Us?</h2>
          <p className="text-gray-600">
            Our websites are optimized for SEO, mobile devices, and performance, ensuring your online presence stands out in a competitive digital landscape.
          </p>
          <h2 className="text-xl font-semibold text-[#0d0d12] mt-6">Get Started</h2>
          <p className="text-gray-600">
            Ready to transform your online presence? Contact us at <a href="mailto:contact@evop.tech" className="text-blue-500 hover:underline">contact@evop.tech</a> to discuss your project.
          </p>
        </section>
      </main>
      
    </div>
  );
}