import { portfolioItems } from "@/lib/portfolioData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function PortfolioDetail({ params }: { params: { slug: string } }) {
  // Find the portfolio item by slug
  const item = portfolioItems.find((item) => item.slug === params.slug);

  // If no item is found, return 404
  if (!item) {
    notFound();
  }

  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-500 hover:underline mb-8"
        >
          ← Kembali ke Portofolio
        </Link>

        {/* Portfolio Item Card (mimics carousel card) */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 space-y-4">
            <span className="text-[#287eff] text-sm font-medium">
              {item.category}
            </span>
            <h1 className="text-xl font-bold text-[#0d0d12] line-clamp-2">
              {item.title}
            </h1>
            <div className="flex items-center text-sm text-gray-600">
              <time>{item.date}</time>
              <span className="mx-2">•</span>
              <span>oleh {item.author}</span>
            </div>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="max-w-3xl mx-auto mt-12 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0d0d12]">Description</h2>
            <p className="text-gray-600 text-lg">{item.description}</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0d0d12]">Sorotan</h2>
            <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
              {item.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}