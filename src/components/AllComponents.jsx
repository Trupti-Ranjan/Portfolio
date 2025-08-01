import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

const AllComponents = () => {
  return (
    <div className="bg-background font-fira min-h-screen">
      <Navbar />
      <div className="md:flex md:flex-col md:items-center md:max-w-[1200px] mx-auto pt-[60px] p-4 md:px-0">
        <HeroSection />
      </div>
    </div>
  );
};

export default AllComponents;
