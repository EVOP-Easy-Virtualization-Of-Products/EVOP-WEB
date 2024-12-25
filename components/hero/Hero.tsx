import { CuboidIcon as Cube, Sparkles, Zap } from 'lucide-react'

export function Hero() {
  return (
    <div className="relative min-h-screen">
    {/* Background Image */}
    <div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: 'url("/bg-hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[#0d0d12]/80" />
    </div>
    <div className="relative z-10 pt-32 pb-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming Ideas into{' '}
              <span className="text-[#287eff]">Secure and Scalable</span> Digital
              Solutions
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              EVOP SOFTWARE HOUSE is a startup established by a group of visionary
              students, focusing on the development of cutting-edge technology
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#287eff] text-white px-6 py-3 rounded-lg hover:bg-[#287eff]/90 transition-colors">
                Contact Us
              </button>
              <button className="bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
                See our services
              </button>
            </div>
          </div>
          
          <div className="lg:block">
            <div className="bg-[#1a1a24] p-8 rounded-2xl space-y-6">
              <FeatureCard
                icon={<Cube className="w-6 h-6 text-[#287eff]" />}
                title="Reliable Services"
              />
              <FeatureCard
                icon={<Sparkles className="w-6 h-6 text-[#287eff]" />}
                title="Affordable Pricing"
              />
              <FeatureCard
                icon={<Zap className="w-6 h-6 text-[#287eff]" />}
                title="Innovative Solutions"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

function FeatureCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="bg-white rounded-xl p-4 flex items-center space-x-4">
      {icon}
      <h3 className="text-[#0d0d12] font-semibold">{title}</h3>
    </div>
  )
}

