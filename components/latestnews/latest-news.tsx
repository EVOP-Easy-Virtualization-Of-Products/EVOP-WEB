"use client"
import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface BlogPost {
  id: string;
  name: string;
  content: Array<{ type: string; value: string }>;
  header_image: string;
  publish_date: Date;
  tags: string[];
}

const getImageUrl = (imagePath: string) => {
  const storageBucket = 'software-house-bio.appspot.com';
  return `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/${encodeURIComponent(imagePath)}?alt=media`;
};

export default function LatestNews() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const q = query(collection(db, 'blog_post'), orderBy('publish_date', 'desc'), limit(6));
        const querySnapshot = await getDocs(q);
        const posts = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name,
            content: data.content,
            header_image: data.header_image,
            publish_date: data.publish_date.toDate(),
            tags: data.tags,
          } as BlogPost;
        });
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const getExcerpt = (content: Array<{ type: string; value: string }>) => {
    const textContent = content
      .filter(item => item.type === 'text')
      .map(item => item.value)
      .join(' ')
      .replace(/[#*_`]/g, '') // Remove markdown characters
      .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
      .trim();
    return textContent.length > 100 ? textContent.substring(0, 100) + '...' : textContent;
  };

  if (loading) {
    return <div className="h-96 flex items-center justify-center">Loading...</div>;
  }
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-[#287eff]/10 text-[#287eff] rounded-full text-sm font-medium">
            Latest News
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d12]">
            Stay Updated with Our Blog
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the latest insights, trends, and updates in the world of technology.
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
                <Link href={`/blog/${post.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-[32rem] grid grid-rows-[12rem_1fr]">
                    <div className="relative w-full h-full">
                      <Image
                        src={getImageUrl(post.header_image)}
                        alt={post.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 grid grid-rows-[auto_1fr_auto] h-full">
                      <h3 className="text-xl font-bold text-[#0d0d12] mb-4 line-clamp-2">
                        {post.name}
                      </h3>
                      <p className="text-gray-600 line-clamp-3">
                        {getExcerpt(post.content)}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-500 pt-4">
                        <span className="bg-gray-100 px-2 py-1 rounded-full truncate max-w-[130px]">
                          {post.tags[0]}
                        </span>
                        <span>{post.publish_date.toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

