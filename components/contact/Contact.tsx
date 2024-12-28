export function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d12]">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg">
            Let's Building Something Great Together!
          </p>
          <p className="text-[#287eff] text-lg">
            Have a project in mind or want to learn more about our services?
            We'd love to hear from you!
          </p>
          <div className="h-[88px] p-5 bg-white rounded-2xl border border-[#dfe1e6] flex-col justify-center items-center gap-6 inline-flex">
            <button className="bg-[#287eff] text-white px-20 py-3 rounded-full hover:bg-[#287eff]/90 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
