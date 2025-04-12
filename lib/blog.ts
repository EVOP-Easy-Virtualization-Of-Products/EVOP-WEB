import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  id: string
  title: string
  date: string
  description: string
  content: string
  image: string
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = await fs.readdir(postsDirectory)
  const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = await fs.readFile(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      id,
      title: data.title,
      date: data.date,
      description: data.description,
      content,
      image: data.image || '/blog-placeholder.jpg'
    }
  }))

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = await fs.readFile(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      id,
      title: data.title,
      date: data.date,
      description: data.description,
      content,
      image: data.image || '/blog-placeholder.jpg'
    }
  } catch {
    return null
  }
}
