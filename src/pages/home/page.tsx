import { useEffect } from 'react';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import Works from './components/Works';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <Works />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}