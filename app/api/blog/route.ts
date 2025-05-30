import fs from 'fs'
import matter from 'gray-matter'
import { NextResponse } from 'next/server'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export async function GET() {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        id,
        title: data.title,
        date: data.date,
        description: data.description,
        image: data.image || '/blog-placeholder.jpg',
        keyword: data.keyword || ''
      }
    })

    // Sort posts by date
    const sortedPosts = allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
    
    return NextResponse.json(sortedPosts)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}
