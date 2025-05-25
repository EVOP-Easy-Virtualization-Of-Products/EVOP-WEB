"use client"; // Add this directive to make it a Client Component

import dynamic from "next/dynamic"; // Import dynamic from Next.js
import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/lib/portfolioData";

// Dynamically import Slider with SSR disabled
// eslint-disable-next-line react
const Slider = dynamic(() => import("react-slick"), {
  ssr: false, // Disable server-side rendering for react-slick
});

// Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export function Portfolio() {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="h-[30px] pl-3 pr-3.5 py-1 bg-white rounded-full shadow-[0px_1px_2px_0px_rgba(13,13,18,0.04)] shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05)] border border-[#dfe1e6] justify-center items-center gap-1.5 inline-flex">
            <img src="portofolio-logo.png" alt="portofolio-logo" />
            <p className="text-blue-500">EVOP Works</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d12]">
            Portofolio Kami
          </h2>
          <p className="text-gray-600 text-lg">
            Berikut adalah semua tips penting kami untuk memulai proyek bisnis Anda.
          </p>
        </div>

        <Slider {...settings}>
          {portfolioItems.map((item, index) => (
            <div key={index} className="px-4">
              <Link
                href={`/portfolio/${item.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <span className="text-[#287eff] text-sm font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#0d0d12] line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <time>{item.date}</time>
                    <span className="mx-2">•</span>
                    <span>oleh {item.author}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}