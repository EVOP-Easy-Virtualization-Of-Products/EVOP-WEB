import { AnimationWrapper } from '@/components/animation-wrapper';
import { Contact } from '@/components/contact/Contact';
import { Hero } from '@/components/hero/Hero';
import LatestNews from '@/components/latestnews/latest-news';
import { Portfolio } from '@/components/portfolio/Portfolio';
import { Services } from '@/components/services/Services';
import { OurTeam } from '@/components/team/Ourteam';
import { WhyUs } from '@/components/why-us/Why-us';
import { Suspense } from 'react';
export const revalidate = 0;

export default function Home() {
  return (
    <>
      <main>
        <section id="hero">
          <Suspense fallback={<div className="h-screen" />}>
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

        <section id="why-us">
          <Suspense >
            <AnimationWrapper>
              <Portfolio />
            </AnimationWrapper>
          </Suspense>
        </section>

        <section id="blog">
          <AnimationWrapper>
            <LatestNews />
          </AnimationWrapper>
        </section>

        <section id="team">
          <AnimationWrapper>
            <OurTeam />
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
  );
}