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
  image?: string; // Optional, as defined
  date: string;
  content: string;
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
      const { data, content } = matter(fileContents); // Extract content

      return {
        id,
        title: data.title || 'Untitled',
        description: data.description || '',
        keyword: data.keyword || '',
        image: data.image || '/blog-placeholder.jpg',
        date: data.date || new Date().toISOString(),
        content, // Include content
      };
    });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error('getAllPosts: Error fetching posts', error);
    return [];
  }
}