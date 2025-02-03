import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 4.8,
    text: "EVOP transformed our outdated website into a modern platform that truly represents our brand. The process was seamless, and the results exceeded our expectations!",
    author: "Helmi Said",
    position: "Freelancer",
    avatar: "/team/Helmi.png",
  },
  {
    rating: 4.8,
    text: "After partnering with EVOP, we feel much more secure about our online systems. Their proactive approach to cybersecurity gave us peace of mind. They conducted a thorough security assessment and implemented robust security measures to protect our sensitive data. We are extremely satisfied with their expertise and professionalism.",
    author: "Mardianta Putra S.kom",
    position: "Cyber Security, Airlangga University",
    avatar: "/client/mardianta.png",
  },
  {
    rating: 4.8,
    text: "EVOP making our website using wordpress only for 10$! so cheap knowing us that just get started, and giving us oppurtunity to start a small bussiness from our campus.",
    author: "Rejal Mahardika",
    position: "Entrepreneur, Founder of Vendor UNAIR shop",
    avatar: "/client/rejal.png",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/customer-Background.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="h-[30px] pl-3 pr-3.5 py-1 bg-white rounded-full shadow-[0px_1px_2px_0px_rgba(13,13,18,0.04)] shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05)] border border-[#dfe1e6] justify-center items-center gap-1.5 inline-flex">
            <img src="/cust.png" alt="testimoni.png" />
            <p className="text-blue-500">Our Customers</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d12]">
            See What Our
            <br />
            Customers Are Saying
          </h2>
          <p className="text-gray-600 text-lg">
            Here's what some of our customers say about our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#ffbe4c] text-[#ffbe4c]"
                  />
                ))}
                <span className="ml-2 text-gray-600">{testimonial.rating}</span>
              </div>

              <p className="text-gray-600 mb-6 min-h-[100px]">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-[#0d0d12]">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
