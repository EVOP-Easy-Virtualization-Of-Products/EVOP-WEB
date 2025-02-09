import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const advantages = [
  {
    title: "Customized Solutions",
    description: "Tailored solutions to meet your specific needs",
  },
  {
    title: "Expert Team",
    description: "Skilled professionals with extensive experience",
  },
  {
    title: "End-to-End Support",
    description: "Comprehensive support throughout your project",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-12 sm:py-24 overflow-auto">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/Background.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
          {/* Image Container */}
          <div className="width: 380px; height: 604px; padding-left: 27px; padding-right: 27px; padding-top: 40px; padding-bottom: 40px; background: #F8FAFB; border-radius: 20px; overflow: hidden; flex-direction: column; justify-content: center; align-items: center; display: inline-flex">
            <Image src="/why-us.png" alt="Why Us" width={326} height={524} />
          </div>

          {/* Content Container */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center px-3 py-1 bg-white rounded-full border border-[#dfe1e6] shadow-sm">
              <Image
                src="/pie-chart.png"
                alt="pie chart"
                width={16}
                height={16}
              />
              <span className="ml-1.5 text-[#277eff] text-sm font-semibold">
                Why Us
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d12] leading-tight">
                The EVOP advantage:
                <br className="hidden sm:block" />
                Reasons to trust our expertise
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Our dedication to quality, innovation, and customer satisfaction
                sets us apart. Here&apos;s why we are the right partner for your
                technology needs:
              </p>
            </div>

            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#287eff] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0d0d12] mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="http://wa.me/+6281249111169"
              target="_blank"
              className="inline-block bg-[#287eff] text-white px-6 sm:px-8 py-3 rounded-full hover:bg-[#287eff]/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
