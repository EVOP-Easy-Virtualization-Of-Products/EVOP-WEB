import { use } from 'react'
import BlogPostContent from './blog-post-content'

interface PageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const id = use(Promise.resolve(params.id))
  
  return <BlogPostContent id={id} />
}

