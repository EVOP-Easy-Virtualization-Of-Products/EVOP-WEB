"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    icon: "/hero1.png",
    title: "Reliable Services",
    alt: "Reliable Services Icon",
  },
  {
    icon: "/hero2.png",
    title: "Affordable Pricing",
    alt: "Affordable Pricing Icon",
  },
  {
    icon: "/hero3.png",
    title: "Innovative Solutions",
    alt: "Innovative Solutions Icon",
  },
];

export function Hero() {
  return (
    <div className="min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/bg-hero.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 w-full py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transforming Ideas into{" "}
                <span className="text-[#287eff] inline-block">
                  Secure and Scalable
                </span>{" "}
                Digital Solutions
              </h1>
              <p className="text-lg max-w-2xl mx-auto lg:mx-0 text-gray-200">
                <span className="font-bold">EVOP (Easy Virtualization Of Products) Tech</span>&nbsp;
                &nbsp; is a startup established by a group of visionary
                students, focusing on the development of cutting-edge technology
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="http://wa.me/+6281249111169"
                  target="_blank"
                  className="bg-[#287eff] text-white px-8 py-3 rounded-full hover:bg-[#287eff]/90 transition-all hover:scale-105 active:scale-95"
                >
                  Contact Us
                </Link>
                <Link
                  href="#services"
                  className="bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
                >
                  See our services
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#287eff]/20 to-purple-500/20 rounded-3xl blur-2xl " />
                <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl">
                  <div className="flex flex-col space-y-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <FeatureCard {...feature} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  alt,
}: {
  icon: string;
  title: string;
  alt: string;
}) {
  return (
    <div className="bg-white rounded-xl p-4 flex items-center space-x-4 hover:scale-[1.02] transition-transform">
      <div className="relative w-8 h-8">
        <Image src={icon} alt={alt} fill className="object-contain" />
      </div>
      <h3 className="text-[#0d0d12] font-semibold flex-1">{title}</h3>
    </div>
  );
}
