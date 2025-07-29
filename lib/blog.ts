// lib/blog.ts
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  modified: any;
  id: string;
  title: string;
  description: string;
  keyword?: string;
  image?: string;
  date: string;
  content: string;
  author?: string;
  author_image?: string; // Properti baru untuk gambar penulis
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    if (!fs.existsSync(fullPath)) {
      console.log(`getPostById: File not found for id: ${id}`);
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id,
      title: data.title || 'Untitled',
      description: data.description || '',
      keyword: data.keyword || '',
      image: data.image || '/blog-placeholder.jpg',
      date: data.date || new Date().toISOString(),
      author: data.author || 'EVOP',
      author_image: data.author_image || null, // Ambil gambar penulis atau null jika tidak ada
      content,
    };
  } catch (error) {
    console.error(`getPostById: Error fetching post for id: ${id}`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id,
        title: data.title || 'Untitled',
        description: data.description || '',
        keyword: data.keyword || '',
        image: data.image || '/blog-placeholder.jpg',
        date: data.date || new Date().toISOString(),
        author: data.author || 'EVOP',
        author_image: data.author_image || null, // Ambil gambar penulis atau null jika tidak ada
        content,
      };
    });

    return allPostsData.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
  } catch (error) {
    console.error('getAllPosts: Error fetching posts', error);
    return [];
  }
}
