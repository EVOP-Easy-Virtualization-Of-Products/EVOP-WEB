import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'
import { AnimationWrapper } from '@/components/animation-wrapper'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="h-[30px] pl-3 pr-3.5 py-1 bg-white rounded-full shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05)] border border-[#dfe1e6] justify-center items-center gap-1.5 inline-flex">
            <Image
              width={16}
              height={16}
              src="/portofolio-logo.png"
              alt="Article EVOP"
            />
            <p className="text-blue-500 text-sm font-sans">EVOP Articles</p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d12]">
            Our Blog Posts
          </h1>
          <p className="text-gray-600 text-lg">
            Here are all our essential tips for getting your business project
            off the ground.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {posts.map((post) => (
            <AnimationWrapper key={post.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/blog-placeholder.jpg"
                      alt={post.title}
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
                  <h2 className="text-xl font-bold text-[#0d0d12] mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-600">{post.date}</time>
                    <Link
                      href={`/blog/${post.id}`}
                      className="px-5 py-2 bg-[#287eff] text-white rounded-lg shadow-[0px_3px_8px_0px_rgba(167,174,183,0.16)] border border-slate-100 hover:bg-[#287eff]/90 transition-colors"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  )
}
