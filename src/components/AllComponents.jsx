import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Cursor from './Cursor';
import Projects from './Projects/Projects';

const AllComponents = () => {
  return (
    <div className="bg-background font-fira hide-scrollbar min-h-screen">
      {/* <Cursor /> */}
      <Navbar />
      <div>
        <HeroSection />
        <Projects />
      </div>
    </div>
  );
};

export default AllComponents;
