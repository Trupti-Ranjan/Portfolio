import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Cursor from './Cursor';
import Projects from './Projects/Projects';
import Footer from './Footer';

const AllComponents = () => {
  return (
    <div className="bg-background font-fira hide-scrollbar min-h-screen w-full overflow-x-hidden">
      {/* <Cursor /> */}
      <Navbar />
      <main className="mx-auto max-w-[1300px] sm:px-6 lg:px-8">
        <HeroSection />
        <Projects />
      </main>
      <div className='w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default AllComponents;
