import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Modules from '@/components/sections/Modules';
import Guarantee from '@/components/sections/Guarantee';
import Footer from '@/components/sections/Footer';
import Features from '@/components/sections/Features';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Modules />
      <Guarantee />
      <Footer />
    </div>
  );
}