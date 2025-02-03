export function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d12] mb-6">Contact Us</h2>
          <p className="text-gray-600 text-lg mb-4">Let&apos;s Building Something Great Together!</p>
          <p className="text-[#287eff] text-lg mb-12">
            Have a project in mind or want to learn more about our services? We&apos;d love to hear from you!
          </p>
          <a
            href="http://wa.me/+6281249111169"
            target="_blank"
            className="inline-block bg-[#287eff] text-white px-20 py-3 rounded-full hover:bg-[#287eff]/90 transition-all hover:scale-105 active:scale-95"
            rel="noreferrer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

