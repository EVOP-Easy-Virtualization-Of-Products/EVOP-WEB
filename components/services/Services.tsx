import { Globe, Smartphone, Users, Shield } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Create modern, responsive, and dynamic websites that enhance your online presence and deliver exceptional user experiences.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Build innovative and user-friendly mobile applications for both iOS and Android platforms to engage your customers on the go.',
  },
  {
    icon: Users,
    title: 'IT Consultant',
    description:
      'Get expert advice to optimize your IT strategies, infrastructure, and operations for maximum efficiency and innovation.',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description:
      'Safeguard your digital assets with advanced cybersecurity solutions to protect against threats and ensure peace of mind.',
  },
]

export function Services() {
  return (
    <section className="py-24 bg-[#f8fafb]">
      <div className="container">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-[#287eff]/10 text-[#287eff] rounded-full text-sm font-medium">
            Why EVOP
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d12]">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            Transform your ideas into reality with our expert services tailored to
            meet your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-[#287eff] rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0d0d12] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

