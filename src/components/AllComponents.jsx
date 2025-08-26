import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Cursor from './Cursor';
import Projects from './Projects/Projects';
import Footer from './Footer';
import Skills from './skills/Skills';
import About from './About';
import Contact from './Contact';

const AllComponents = () => {

  return (
    <div className="bg-background font-fira hide-scrollbar relative min-h-screen w-full overflow-x-hidden">
      {/* <Cursor /> */}
      <Navbar />
      <main className="relative z-10 mx-auto max-w-[1300px] sm:px-6 lg:px-8">
        <HeroSection />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AllComponents;
