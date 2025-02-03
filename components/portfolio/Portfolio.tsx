import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    image: "/portofolio.png",
    category: "UI/UX Designer",
    title: "Top 5 Hackathon FINDIT UGM 2024",
    date: "24 Mei, 2024",
    author: "EVOP",
  },
  {
    image: "/eventspeaker.png",
    category: "Cyber Security",
    title: "EVOP Member found critical bug at Airlangga University and become event speaker.",
    date: "20 Februari, 2024",
    author: "EVOP",
  },
  {
    image: "/lecturer.png",
    category: "Cyber Security",
    title: "Lecturing UKM UNAIR how to protect their website in cyber drill event.",
    date: " 5 August, 2024",
    author: "EVOP",
  },
];

export function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="h-[30px] pl-3 pr-3.5 py-1 bg-white rounded-full shadow-[0px_1px_2px_0px_rgba(13,13,18,0.04)] shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05)] border border-[#dfe1e6] justify-center items-center gap-1.5 inline-flex">
            <img src="portofolio-logo.png" alt="portofolio-logo" />
            <p className="text-blue-500">EVOP Works</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d12]">
            Our Portfolio
          </h2>
          <p className="text-gray-600 text-lg">
            Here are all our essential tips for getting your business project
            off the ground.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="group block bg-white rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <span className="text-[#287eff] text-sm font-medium">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-[#0d0d12] line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600">
                  <time>{item.date}</time>
                  <span className="mx-2">•</span>
                  <span>by {item.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
