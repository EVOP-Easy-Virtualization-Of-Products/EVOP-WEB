import { getAllPosts, getPostById } from "@/lib/blog";
import MarkdownIt from "markdown-it";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RecommendedPostsSlider from "./recommended-posts-slider";

type Props = {
  params: Promise<{ id: string }>; // Ensure params is typed as a Promise
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params; // Await params to resolve the id
  const post = await getPostById(id);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | EVOP Tech`,
    description: post.description,
    keywords: post.keyword?.split(", ") ?? ["blog", "article"],
    alternates: {
      canonical: `https://evop.tech/blog/${id}`, // Set canonical URL here
    },
    openGraph: {
      title: `${post.title} - EVOP Tech`,
      description: post.description,
      type: "article",
      images: [
        {
          url: post.image ?? "/blog-placeholder.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params; // Await params in the page component as well
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  const contentHtml = md.render(post.content);

  const recommendedPosts = allPosts
    .filter((p) => p.id !== id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 pt-16 sm:pt-20 md:pt-24">
      <div className="container mx-auto px-4 sm:px-6 mt-5">
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <Link href="/blog" className="inline-flex items-center text-[#287eff] hover:text-[#1855F1] mb-4 sm:mb-8">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Articles
          </Link>

          <div className="relative h-[200px] sm:h-[300px] md:h-[400px] w-full mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src={post.image ?? "/blog-placeholder.jpg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="px-3 sm:px-4 py-1 rounded-md inline-flex bg-[#1855F1]/5 w-fit">
              <span className="text-[#1855F1] text-xs sm:text-sm leading-tight">Article</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d0d12] leading-tight">
              {post.title}
            </h1>
            <time className="block text-sm sm:text-base text-gray-600">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>

        <article
          className="prose prose-base sm:prose-lg lg:prose-xl 
            prose-headings:text-[#0d0d12] 
            prose-h1:text-2xl sm:prose-h1:text-3xl md:prose-h1:text-4xl
            prose-h1:text-center prose-h1:mb-8
            prose-h2:text-xl sm:prose-h2:text-2xl md:prose-h2:text-3xl
            prose-h2:text-center prose-h2:mb-6
            prose-h3:text-left text-lg sm:prose-h3:text-xl md:prose-h3:text-2xl
            prose-h3:mb-4
            prose-h4:text-left prose-h4:text-md
            prose-p:text-gray-600 
            prose-p:text-sm sm:prose-p:text-base md:prose-p:text-lg
            prose-a:text-[#287eff] hover:prose-a:text-[#1855F1] 
            prose-img:rounded-xl prose-img:shadow-lg 
            [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl [&_iframe]:shadow-lg 
            [&_img]:w-full [&_img]:h-auto
            [&_ul]:text-sm sm:[&_ul]:text-base md:[&_ul]:text-lg
            [&_ol]:text-sm sm:[&_ol]:text-base md:[&_ol]:text-lg
            mx-auto bg-white rounded-xl sm:rounded-2xl shadow-lg 
            p-4 sm:p-8 md:p-12 
            max-w-4xl mb-8 sm:mb-12"
        >
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>

        {recommendedPosts.length > 0 && (
          <section className="max-w-6xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d0d12] text-center mb-6 sm:mb-8">
              Recommended Articles
            </h2>
            <RecommendedPostsSlider posts={recommendedPosts} />
          </section>
        )}

        <div className="max-w-4xl mx-auto pb-8 sm:pb-12 text-center">
          <Link
            href="/blog"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-[#287eff] to-[#1855F1] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}