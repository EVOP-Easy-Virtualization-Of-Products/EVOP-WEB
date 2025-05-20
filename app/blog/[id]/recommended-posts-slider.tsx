"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import required modules
import type { BlogPost } from "@/lib/blog"; // Import BlogPost type directly
import { A11y, Navigation, Pagination } from "swiper/modules"

export default function RecommendedPostsSlider({ posts }: { posts: BlogPost[] }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return <div className="h-[350px] bg-gray-100 rounded-xl animate-pulse"></div>
  }

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          // When window width is >= 640px (sm)
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // When window width is >= 1024px (lg)
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        className="w-full"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <Link
              href={`/blog/${post.id}`}
              className="block bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow h-full"
            >
              <div className="relative h-[180px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#0d0d12] mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 line-clamp-3">{post.description}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper {
          --swiper-theme-color: #1855F1;
          --swiper-navigation-size: 24px;
          --swiper-pagination-bullet-inactive-color: #cbd5e1;
          --swiper-pagination-bullet-inactive-opacity: 0.5;
          padding: 30px 10px;
        }
        
        .swiper-slide {
          height: auto; /* Equal height slides */
        }
        
        /* Improve navigation button visibility */
        .swiper-button-next,
        .swiper-button-prev {
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
        }
        
        /* Adjust spacing for mobile */
        @media (max-width: 640px) {
          .swiper {
            --swiper-navigation-size: 20px;
            padding: 25px 5px;
          }
          
          .swiper-button-next,
          .swiper-button-prev {
            width: 32px;
            height: 32px;
          }
          
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}
