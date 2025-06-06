import Link from "next/link";
import Image from "next/image";
const services = [
  {
    image: "/services-logo1.png",
    title: "Website Development",
    description:
      "Create modern, responsive, and dynamic websites that enhance your online presence and deliver exceptional user experiences.",
    href: "/services/website-development",
  },
  {
    image: "/services-logo2.png",
    title: "Mobile Development",
    description:
      "Build innovative and user-friendly mobile applications for both iOS and Android platforms to engage your customers on the go.",
    href: "/services/mobile-development",
  },
  {
    image: "/services-logo3.png",
    title: "IT Consultant",
    description:
      "Get expert advice to optimize your IT strategies, infrastructure, and operations for maximum efficiency and innovation.",
    href: "/services/it-consultant",
  },
  {
    image: "/services-logo4.png",
    title: "Cyber Security",
    description:
      "Safeguard your digital assets with advanced cybersecurity solutions to protect against threats and ensure peace of mind.",
    href: "/services/cyber-security",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-[#f8fafb]">
      <div className="container">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="h-[30px] pl-3 pr-3.5 py-1 bg-white rounded-full shadow-[0px_1px_2px_0px_rgba(13,13,18,0.04)] shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05)] border border-[#dfe1e6] justify-center items-center gap-1.5 inline-flex">
            <Image src="/services.png" alt="Service EVOP" width="17" height="16" />
            <p className="text-blue-500">Why EVOP</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d12]">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            Transform your ideas into reality with our expert services tailored
            to meet your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link href={service.href} key={index}>
              <div
                className="bg-white rounded-2xl p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Image src={service.image} alt={service.title} width="52" height="52"/>
                </div>
                <h3 className="text-2xl font-bold text-[#0d0d12] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}