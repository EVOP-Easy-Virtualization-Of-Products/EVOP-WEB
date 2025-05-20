// components/blog/BlogFilter.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimationWrapper } from '../animation-wrapper';
import { BlogPost } from '@/lib/blog';

type FilterOption = 'latest' | 'oldest';

interface BlogFilterProps {
  initialPosts: BlogPost[];
}

export default function BlogFilter({ initialPosts }: BlogFilterProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('latest');
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);

  const handleFilterChange = (filter: FilterOption) => {
    setActiveFilter(filter);
    const sortedPosts = [...initialPosts].sort((a, b) => {
      if (filter === 'latest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });
    setPosts(sortedPosts);
  };

  return (
    <div className="w-full">
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => handleFilterChange('latest')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            activeFilter === 'latest'
              ? 'bg-[#287eff] text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-[#287eff]/50'
          }`}
        >
          Latest
        </button>
        <button
          onClick={() => handleFilterChange('oldest')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            activeFilter === 'oldest'
              ? 'bg-[#287eff] text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-[#287eff]/50'
          }`}
        >
          Oldest
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {posts.map((post) => (
          <AnimationWrapper key={post.id}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <Link
                href={`/blog/${post.id}`}
                className="block"
                title={`Read full article: ${post.title}`}
                aria-label={`Read ${post.title} - ${post.description}`}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image ?? '/blog-placeholder.jpg'}
                    alt={`Featured image for article: ${post.title}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="px-4 py-1 rounded-md inline-flex bg-[#1855F1]/5 w-fit mb-4">
                  <span className="text-[#1855F1] text-sm leading-tight">
                    Article
                  </span>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="block"
                  title={`Read full article: ${post.title}`}
                >
                  <h2 className="text-xl font-bold text-[#0d0d12] mb-2 line-clamp-2 hover:text-[#287eff] transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-600" dateTime={post.date}>
                    {post.date}
                  </time>
                  <Link
                    href={`/blog/${post.id}`}
                    className="px-5 py-2 bg-[#287eff] text-white rounded-lg shadow-[0px_3px_8px_0px_rgba(167,174,183,0.16)] border border-slate-100 hover:bg-[#287eff]/90 transition-colors"
                    title={`Continue reading ${post.title}`}
                    aria-label={`Read full article about ${post.title}`}
                  >
                    Read full article
                  </Link>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        ))}
      </div>
    </div>
  );
}