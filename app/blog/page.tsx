import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { AnimationWrapper } from "@/components/animation-wrapper";
import type { Metadata } from "next";
import BlogFilter from "@/components/blog/BlogFilter";

export const metadata: Metadata = {
  title: "EVOP Blog - Latest Articles and Insights",
  description:
    "Explore our collection of articles about business, technology, and digital transformation. Get expert insights and tips from EVOP.",
  openGraph: {
    title: "EVOP Blog - Latest Articles and Insights",
    description:
      "Explore our collection of articles about business, technology, and digital transformation. Get expert insights and tips from EVOP.",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimationWrapper>
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <div className="h-[30px] pl-3 pr-3.5 py-1 bg-white rounded-full shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05)] border border-[#dfe1e6] justify-center items-center gap-1.5 inline-flex">
              <Image
                width={16}
                height={16}
                src="/portofolio-logo.png"
                alt="EVOP Blog Articles Logo"
              />
              <p className="text-blue-500 text-sm font-sans">EVOP Articles</p>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d12]">
              Latest from Our Blog
            </h1>
            <p className="text-gray-600 text-lg">
              Here are all our essential tips for getting your business project
              off the ground.
            </p>
          </div>
        </AnimationWrapper>

        {/* Filter */}
        <AnimationWrapper>
          <div className="flex justify-center mb-8">
            <BlogFilter initialPosts={posts} />
          </div>
        </AnimationWrapper>

        {/* Blog Grid will be rendered by the BlogFilter component */}
      </div>
    </div>
  );
}
