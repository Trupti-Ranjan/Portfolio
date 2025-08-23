import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Cursor from './Cursor';
import Projects from './Projects/Projects';
import Footer from './Footer';
import Skills from './skills/Skills';
import About from './About';

const AllComponents = () => {
  const glowRef = useRef();

  useEffect(() => {
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        x: 100, // slight horizontal movement
        y: 60, // slight vertical movement
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <div className="bg-background font-fira hide-scrollbar relative min-h-screen w-full overflow-x-hidden">
      {/* Glowing animated gradient */}
      {/* <div
        ref={glowRef}
        className="pointer-events-none absolute top-[-150px] left-[-150px] h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(0,255,128,0.35),transparent_70%)] blur-3xl"
      /> */}

      {/* <Cursor /> */}
      <Navbar />
      <main className="relative z-10 mx-auto max-w-[1300px] sm:px-6 lg:px-8">
        <HeroSection />
        <Projects />
        <Skills />
        <About />
      </main>
      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AllComponents;
