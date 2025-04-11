import { getPostById } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostById(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link 
            href="/blog"
            className="inline-flex items-center text-[#287eff] hover:text-[#1855F1] mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Articles
          </Link>

          <div className="relative h-[400px] w-full mb-8 rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            <div className="px-4 py-1 rounded-md inline-flex bg-[#1855F1]/5 w-fit">
              <span className="text-[#1855F1] text-sm leading-tight">Article</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0d0d12]">{post.title}</h1>
            <time className="block text-gray-600">{post.date}</time>
          </div>
        </div>

        {/* Content */}
        <article className="prose lg:prose-xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              img: (props) => (
                <div className="relative w-full h-64 my-8">
                  <Image
                    src={props.src || ''}
                    alt={props.alt || ''}
                    fill
                    className="object-contain"
                  />
                </div>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Footer */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#287eff] to-[#1855F1] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </div>
  )
}
