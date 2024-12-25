import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    rating: 4.8,
    text: "EVOP transformed our outdated website into a modern platform that truly represents our brand. The process was seamless, and the results exceeded our expectations!",
    author: "Kania Selmanita",
    position: "Co-Founder, Heroes Digital",
    avatar: "/placeholder.svg"
  },
  {
    rating: 4.8,
    text: "Our mobile app was delivered on time and packed with features. EVOP's team understood our needs perfectly and brought our vision to life!",
    author: "Kania Selmanita",
    position: "Co-Founder, WoCommerce",
    avatar: "/placeholder.svg"
  },
  {
    rating: 4.8,
    text: "EVOP's IT consultancy helped streamline our operations and improved our team's productivity. Their expert guidance was a game-changer for us",
    author: "Kania Selmanita",
    position: "Product Designer",
    avatar: "/placeholder.svg"
  },
  {
    rating: 4.8,
    text: "After partnering with EVOP, we feel much more secure about our online systems. Their proactive approach to cybersecurity gave us peace of mind",
    author: "Kania Selmanita",
    position: "Co-Founder, Slack",
    avatar: "/placeholder.svg"
  },
  {
    rating: 4.8,
    text: "We were amazed at the quality of service EVOP provided at such reasonable rates. It's rare to find such value in the market.",
    author: "Kania Selmanita",
    position: "Co-Founder, Heroes Digital",
    avatar: "/placeholder.svg"
  },
  {
    rating: 4.8,
    text: "The EVOP team delivered our project faster than expected without compromising quality. Their efficiency is truly impressive!",
    author: "Kania Selmanita",
    position: "Marketing, Google",
    avatar: "/placeholder.svg"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/customer-Background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-[#287eff]/10 text-[#287eff] rounded-full text-sm font-medium">
            Our Customers
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
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

