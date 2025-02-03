
import { Check } from "lucide-react";

const advantages = [
  {
    title: "Customized Solutions",
    description: "Tailored solutions to meet your specific needs",
  },
  {
    title: "Expert Team",
    description: "Skilled professionals with extensive experience",
  },
  {
    title: "End-to-End Support",
    description: "Comprehensive support throughout your project",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/Background.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10">
        <div className="h-[604px] justify-start items-center gap-24 inline-flex">
          {/* <div className="relative rounded-3xl overflow-hidden ">
            <div className="justify-center p-4">
              <Image
                src="/why-us.png"
                alt="EVOP team collaboration"
                width={600}
                height={200}
                className="w-2/3 object-cover"
              />
            </div>
          </div> */}
          <div className="w-[380px] h-[604px] flex-col justify-center items-center inline-flex pr-0">
            <div className="w-[380px] h-[604px] px-[27px] py-10 bg-[#f8f9fb] rounded-[20px] flex-col justify-center items-center inline-flex overflow-hidden pr-0">
              <img
                className="w-[326px] h-[524px] rounded-2xl pr-0"
                src="/why-us.png"
              />
            </div>
          </div>

          <div className="space-y-8">
            {/* <div className="inline-block px-4 py-1 bg-[#287eff]/10 text-[#287eff] rounded-full text-sm font-medium">
              <img src="/pie-chart.png" alt="" />
              Why Us
            </div> */}

            <div className="h-[30px] pl-3 pr-3.5 py-1 bg-white rounded-full border border-[#dfe1e6] justify-center items-center gap-1.5 inline-flex">
              <img src="/pie-chart.png" alt="pie-chart" />
              <div className="text-[#277eff] text-sm font-semibold font-['Plus Jakarta Sans']">
                Why Us
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d12] leading-tight">
                The EVOP advantage:
                <br />
                Reasons to trust our expertise
              </h2>
              <p className="text-gray-600 text-lg">
                Our dedication to quality, innovation, and customer satisfaction
                sets us apart. Here&apos;s why we are the right partner for your
                technology needs:
              </p>
            </div>

            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#287eff] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0d0d12] mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-[#287eff] text-white px-8 py-3 rounded-full hover:bg-[#287eff]/90 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
