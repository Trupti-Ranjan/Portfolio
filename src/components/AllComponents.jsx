import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Cursor from './Cursor';

const AllComponents = () => {
  return (
    <div className="bg-background font-fira hide-scrollbar min-h-screen">
      <Cursor />
      <Navbar />
      <div className="mx-auto p-4 pt-[60px] md:flex md:max-w-[1200px] md:flex-col md:items-center md:px-0">
        <HeroSection />
      </div>
    </div>
  );
};

export default AllComponents;
