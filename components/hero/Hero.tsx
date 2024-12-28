import { CuboidIcon as Cube, Sparkles, Zap } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/bg-hero.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" />
      </div>
      <div className="relative z-10 pt-32 pb-24 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transforming Ideas into{" "}
                <span className="text-[#287eff]">Secure and Scalable</span>{" "}
                Digital Solutions
              </h1>
              <p className="text-lg max-w-2xl">
                <span className="font-bold">EVOP SOFTWARE HOUSE</span> is a
                startup established by a group of visionary students, focusing
                on the development of cutting-edge technology
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#287eff] text-white px-6 py-3 rounded-full hover:bg-[#287eff]/90 transition-colors">
                  Contact Us
                </button>
                <button className="bg-white/10 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-colors">
                  See our services
                </button>
              </div>
            </div>

            <div className="lg:block">
              <div className="w-4/5 h-[31.25rem] flex flex-col items-center justify-center h-screen bg-gray-900 bg-opacity-55 rounded-3xl">
                <div className="w-96 h-[360px] bg-gray-500 rounded-lg shadow-md p-8 bg-opacity-65 rounded-3xl">
                  <div className="flex flex-col space-y-12 rounded-lg">
                    <div className="w-80 h-16 flex items-center justify-center bg-white text-black font-plus-jakarta font-bold p-2 rounded-xl text-lg">
                      <img src="hero1.png" alt="icon" />
                      Reliable Services
                    </div>
                    <div className="w-80 h-16 flex items-center justify-center bg-white text-black font-plus-jakarta font-bold p-2 rounded-xl text-lg">
                      <img src="hero2.png" alt="icon" />
                      Affordable Pricing
                    </div>
                    <div className="w-80 h-16 flex items-center justify-center bg-white text-black font-plus-jakarta font-bold p-2 rounded-xl text-lg">
                      <img src="hero3.png" alt="icon" />
                      Innovative Solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="bg-white rounded-xl p-4 flex items-center space-x-4">
      {icon}
      <h3 className="text-[#0d0d12] font-semibold">{title}</h3>
    </div>
  );
}
