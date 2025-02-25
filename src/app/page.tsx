import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Mindset from '@/components/sections/Mindset';
import ModulesOverview from '@/components/sections/ModulesOverview';
import Features from '@/components/sections/Features';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import CallToAction from '@/components/sections/CallToAction';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mindset />
      <ModulesOverview />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
    </div>
  );
}