"use client"
import { useState, useEffect } from "react"
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

interface BlogPost {
  id: string
  name: string
  content: Array<{ type: string; value: string }>
  header_image: string
  publish_date: Date
  tags: string[]
}

const getImageUrl = (imagePath: string) => {
  const storageBucket = "software-house-bio.appspot.com"
  return `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/${encodeURIComponent(imagePath)}?alt=media`
}

export default function LatestNews() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const q = query(collection(db, "blog_post"), orderBy("publish_date", "desc"), limit(6))
        const querySnapshot = await getDocs(q)
        const posts = querySnapshot.docs.map((doc) => {
          const data = doc.data()
          return {
            id: doc.id,
            name: data.name,
            content: data.content,
            header_image: data.header_image,
            publish_date: data.publish_date.toDate(),
            tags: data.tags,
          } as BlogPost
        })
        setBlogPosts(posts)
      } catch (error) {
        console.error("Error fetching blog posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  const getExcerpt = (content: Array<{ type: string; value: string }>) => {
    const textContent = content
      .filter((item) => item.type === "text")
      .map((item) => item.value)
      .join(" ")
      .replace(/[#*_`]/g, "")
      .replace(/\s+/g, " ")
      .trim()
    return textContent.length > 100 ? textContent.substring(0, 100) + "..." : textContent
  }

  if (loading) {
    return <div className="h-96 flex items-center justify-center">Loading...</div>
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="h-[30px] pl-3 pr-3.5 py-1 bg-white rounded-full shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05)] border border-[#dfe1e6] justify-center items-center gap-1.5 inline-flex">
            <Image width={16} height={16} src="/portofolio-logo.png" alt="Article EVOP" />
            <p className="text-blue-500 text-sm font-sans">EVOP Articles</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d12]">Blog</h2>
          <p className="text-gray-600 text-lg">
            Here are all our essential tips for getting your business project off the ground.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-12"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="relative h-[520px] bg-white rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
                  <Link href={`/blog/${post.id}`} prefetch={false} className="block h-full">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={getImageUrl(post.header_image) || "/placeholder.svg"}
                        alt={post.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-6 flex flex-col h-[calc(100%-36%)]">
                      <div className="px-4 py-1 rounded-md inline-flex bg-[#1855F1]/5 w-fit">
                        <span className="text-[#1855F1] text-sm leading-tight">{post.tags[0]}</span>
                      </div>

                      <div className="mt-4">
                        <h3 className="text-xl font-bold text-[#0d0d12] line-clamp-2">{post.name}</h3>
                        <p className="mt-2 text-gray-600 line-clamp-3">{getExcerpt(post.content)}</p>
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                        <time className="text-sm text-gray-600">{post.publish_date.toLocaleDateString()}</time>
                        <div className="px-5 py-2 bg-[#287eff] text-white rounded-lg shadow-[0px_3px_8px_0px_rgba(167,174,183,0.16)] border border-slate-100 hover:bg-[#287eff]/90 transition-colors">
                          <span className="text-base font-semibold leading-7 tracking-tight">Read more</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

