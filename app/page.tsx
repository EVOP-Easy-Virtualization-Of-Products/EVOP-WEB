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

// const Portfolio = dynamic(() => import('@/components/portfolio/Portfolio').then(mod => ({ default: mod.Portfolio })), {
//   loading: () => <div className="h-96 bg-white" />
// })

// const Testimonials = dynamic(() => import('@/components/testimonials/Testimonials').then(mod => ({ default: mod.Testimonials })), {
//   loading: () => <div className="h-96 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
// })

const OurTeam = dynamic(() => import('@/components/team/Ourteam').then(mod => ({ default: mod.OurTeam })), {
  loading: () => <div className="h-96 bg-white" />
})

const Contact = dynamic(() => import('@/components/contact/Contact').then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="h-96 bg-white" />
})

const LatestNews = dynamic(() => import('@/components/latestnews/latest-news'), {
  loading: () => <div className="h-96 bg-white" />
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

        {/* <section id="testimonials">
          <AnimationWrapper>
            <Testimonials/>
          </AnimationWrapper>
        </section>
         */}
        <section id="blog">
          <AnimationWrapper>
            <LatestNews/>
          </AnimationWrapper>
        </section>

        <section id="team">
          <AnimationWrapper>
            <OurTeam/>
          </AnimationWrapper>
        </section>

        <section id="contact">
          <Suspense fallback={<div className="h-96 bg-white" />}>
            <AnimationWrapper>
              <Contact />
            </AnimationWrapper>
          </Suspense>
        </section>
      </main>

    
    </>
  )
}

