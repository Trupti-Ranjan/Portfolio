import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Cursor from './Cursor';
import Projects from './Projects/Projects';
import Footer from './Footer';

const AllComponents = () => {
  return (
    <div className="bg-background font-fira hide-scrollbar min-h-screen overflow-hidden">
      {/* <Cursor /> */}
      <Navbar />
      <div>
        <HeroSection />
        {/* <Projects /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default AllComponents;
