import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Dot4X4 = () => {
  // Use a ref to target the main container
  const containerRef = useRef(null);

  useEffect(() => {
    // We create a GSAP context to manage the animations.
    // This is a best practice for clean-up and a common pattern with React.
    const ctx = gsap.context(() => {
      // Create a timeline for sequencing the animations
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      // Use a GSAP selector to target all the dots inside our ref'd container
      const dots = gsap.utils.toArray('.dot');

      // Animate the dots
      tl.to(dots, {
        scale: 1.5,
        stagger: {
          each: 0.1, // Stagger the animation of each dot
          from: "random" // Make the animation start from a random dot
        },
        duration: 0.5,
        ease: "power2.inOut",
        backgroundColor: "#C778DD" // Example: change color on hover (or a lighter gray)
      });
      
    }, containerRef); // <- The context is scoped to this ref

    // Return a clean-up function that reverts the context
    return () => ctx.revert();
    
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div ref={containerRef} className='flex flex-col gap-[21px]'>
      <div className='flex justify-between w-[84px]'>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
      </div>
      <div className='flex justify-between w-[84px]'>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
      </div>
      <div className='flex justify-between w-[84px]'>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
      </div>
      <div className='flex justify-between w-[84px]'>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
        <div className="dot bg-gray h-1 w-1 rounded-full"></div>
      </div>
    </div>
  );
};

export default Dot4X4;