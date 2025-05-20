import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export async function getPostById(id: string) {
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
    console.log(`getPostById: Error fetching post for id: ${id}`, error);
    return null;
  }
}

export async function getAllPosts() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        id,
        title: data.title || 'Untitled',
        description: data.description || '',
        keyword: data.keyword || '',
        image: data.image || '/blog-placeholder.jpg',
        date: data.date || new Date().toISOString(),
      };
    });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.log('getAllPosts: Error fetching posts', error);
    return [];
  }
}