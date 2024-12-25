import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { AnimationWrapper } from '@/components/animation-wrapper'

// Lazy load components
const Hero = dynamic(() => import('@/components/hero/Hero').then(mod => ({ default: mod.Hero })), {
  loading: () => <div className="h-screen" />
})

const Services = dynamic(() => import('@/components/services/Services').then(mod => ({ default: mod.Services })), {
  loading: () => <div className="h-96 bg-white" />
})

const WhyUs = dynamic(() => import('@/components/why-us/Why-us').then(mod => ({ default: mod.WhyUs })), {
  loading: () => <div className="h-96 bg-gradient-to-br from-white to-blue-50/50" />
})

const Portfolio = dynamic(() => import('@/components/portfolio/Portfolio').then(mod => ({ default: mod.Portfolio })), {
  loading: () => <div className="h-96 bg-white" />
})

const Testimonials = dynamic(() => import('@/components/testimonials/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
})

const Contact = dynamic(() => import('@/components/contact/Contact').then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="h-96 bg-white" />
})

const Footer = dynamic(() => import('@/components/footer/Footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-40" />
})

export default function Home() {
  return (
    <>
      <main>
        <section id="hero">
          <Suspense fallback={<div className="h-screen " />}>
            <AnimationWrapper>
              <Hero />
            </AnimationWrapper>
          </Suspense>
        </section>

        <section id="services">
          <Suspense fallback={<div className="h-96 bg-white" />}>
            <AnimationWrapper>
              <Services />
            </AnimationWrapper>
          </Suspense>
        </section>

        <section id="why-us">
          <Suspense fallback={<div className="h-96 bg-gradient-to-br from-white to-blue-50/50" />}>
            <AnimationWrapper>
              <WhyUs />
            </AnimationWrapper>
          </Suspense>
        </section>

        <section id="portfolio">
          <Suspense fallback={<div className="h-96 bg-white" />}>
            <AnimationWrapper>
              <Portfolio />
            </AnimationWrapper>
          </Suspense>
        </section>

        <section id="testimonials">
          <Suspense fallback={<div className="h-96 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />}>
            <AnimationWrapper>
              <Testimonials />
            </AnimationWrapper>
          </Suspense>
        </section>

        <section id="contact">
          <Suspense fallback={<div className="h-96 bg-white" />}>
            <AnimationWrapper>
              <Contact />
            </AnimationWrapper>
          </Suspense>
        </section>
      </main>

      <Suspense fallback={<div className="h-40" />}>
        <Footer />
      </Suspense>
    </>
  )
}

