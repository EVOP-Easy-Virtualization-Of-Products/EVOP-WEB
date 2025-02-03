'use client'

import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPost {
  id: string;
  name: string;
  content: Array<{ 
    type: string; 
    value: string | string[];
  }>;
  header_image: string;
  publish_date: Date;
  tags: string[];
}

const getImageUrl = (imagePath: string) => {
  const storageBucket = 'software-house-bio.appspot.com';
  return `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/${encodeURIComponent(imagePath)}?alt=media`;
};

export default function BlogPostContent({ id }: { id: string }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      const docRef = doc(db, 'blog_post', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setPost({
          id: docSnap.id,
          name: data.name,
          content: data.content,
          header_image: data.header_image,
          publish_date: data.publish_date.toDate(),
          tags: data.tags,
        } as BlogPost);
      } else {
        console.log('No such document!');
      }
      setLoading(false);
    };

    fetchBlogPost();
  }, [id]);

  if (loading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!post) {
    return <div className="h-screen flex items-center justify-center">Post not found</div>;
  }

  const renderContent = (content: Array<{ type: string; value: string | string[] }>) => {
    return content.map((item, index) => {
      if (item.type === 'text') {
        return (
          <div key={index} className="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-a:text-blue-600">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {item.value as string}
            </ReactMarkdown>
          </div>
        );
      }
      if (item.type === 'images' && Array.isArray(item.value)) {
        return (
          <div key={index} className="my-8 grid gap-4">
            {(item.value as string[]).map((imagePath, imgIndex) => (
              <div key={imgIndex} className="relative h-96 w-full">
                <Image
                  src={getImageUrl(imagePath)}
                  alt={`Blog image ${imgIndex + 1}`}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        );
      }
      return null;
    });
  };

  return (
    <article className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.name}</h1>
      <div className="mb-8 text-gray-600">
        <span>{post.tags.join(', ')}</span> • <span>{post.publish_date.toLocaleDateString()}</span>
      </div>
      {post.header_image && (
        <div className="relative h-96 mb-8">
          <Image
            src={getImageUrl(post.header_image)}
            alt={post.name}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}
      <div className="space-y-8">
        {renderContent(post.content)}
      </div>
    </article>
  );
}

