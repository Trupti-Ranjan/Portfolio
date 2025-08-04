import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Dot4X4 = () => {
  
  const containerRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      
      const dots = gsap.utils.toArray('.dot');

      
      tl.to(dots, {
        scale: 1.5,
        stagger: {
          each: 0.1, 
          from: "random" 
        },
        duration: 0.5,
        ease: "power2.inOut",
        backgroundColor: "#C778DD" 
      });
      
    }, containerRef); 

    
    return () => ctx.revert();
    
  }, []); 

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