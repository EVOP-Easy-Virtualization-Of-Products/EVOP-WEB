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



const Footer = dynamic(() => import('@/components/footer/Footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-40" />
})

export default function Home() {
  return (
    <>
      <main>
        <section id="hero">
          <Suspense fallback={<div className="h-screen " />}>
              <Hero />
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


      </main>

      <Suspense fallback={<div className="h-40" />}>
        <Footer />
      </Suspense>
    </>
  )
}

