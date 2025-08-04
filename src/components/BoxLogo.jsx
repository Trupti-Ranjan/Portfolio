import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Logo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a GSAP Timeline that repeats indefinitely
      const tl = gsap.timeline({ repeat: -1 });

      const duration = 0.5; // Duration of the border rotation
      const pause = 2; // Duration of the pause in seconds
      const stagger = { each: 0.05, from: "start" };
      
      const allBoxes = [
        ".box-1-1", ".box-1-2", ".box-1-3", ".box-1-4",
        ".box-2-1", ".box-2-2", ".box-2-3", ".box-2-4",
        ".box-3-1", ".box-3-2", ".box-3-3", ".box-3-4",
        ".box-4-1", ".box-4-2", ".box-4-3", ".box-4-4"
      ];

      // Step 1: Pause after the initial logo appears
      tl.to({}, { duration: pause });

      // Step 2: Animate from the initial state to the "rotated" state
      tl.to(allBoxes, {
        duration: duration,
        stagger: stagger,
        ease: "power1.inOut",
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1
      });

      // Step 3: Animate back to the initial state immediately after
      tl.to(allBoxes, {
        duration: duration,
        stagger: stagger,
        ease: "power1.inOut",
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0
      });

      // Step 4: Add another pause before the entire sequence repeats
      tl.to({}, { duration: pause });

    }, containerRef);

    // Clean up the animation when the component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col">
      <div className="flex w-[155px]">
        <div className="box-1-1 border-primary h-[38.75px] w-[38.75px] border-b"></div>
        <div className="box-1-2 border-primary h-[38.75px] w-[38.75px] border-r border-b"></div>
        <div className="box-1-3 border-primary h-[38.75px] w-[38.75px] border border-t-2 border-r-0"></div>
        <div className="box-1-4 border-primary h-[38.75px] w-[38.75px] border border-t-2 border-r-2 border-b-0 border-l-0"></div>
      </div>
      <div className="flex w-[155px] justify-between">
        <div className="box-2-1 border-primary h-[38.75px] w-[38.75px] border border-r-0 border-b-0 border-l-2"></div>
        <div className="box-2-2 border-primary h-[38.75px] w-[38.75px] border border-l-0"></div>
        <div className="box-2-3 border-primary h-[38.75px] w-[38.75px] border"></div>
        <div className="box-2-4 border-primary h-[38.75px] w-[38.75px] border border-y-0 border-r-2"></div>
      </div>
      <div className="flex w-[155px] justify-between">
        <div className="box-3-1 border-primary h-[38.75px] w-[38.75px] border border-t-0 border-b-0 border-l-2"></div>
        <div className="box-3-2 border-primary h-[38.75px] w-[38.75px] border"></div>
        <div className="box-3-3 border-primary h-[38.75px] w-[38.75px] border border-r-0"></div>
        <div className="box-3-4 border-primary h-[38.75px] w-[38.75px] border border-t-0 border-r-2 border-l-0"></div>
      </div>
      <div className="flex w-[155px] justify-between">
        <div className="box-4-1 border-primary h-[38.75px] w-[38.75px] border border-t-0 border-r-0 border-b-2 border-l-2"></div>
        <div className="box-4-2 border-primary h-[38.75px] w-[38.75px] border border-b-2 border-l-0"></div>
        <div className="box-4-3 border-primary h-[38.75px] w-[38.75px] border-t border-l"></div>
        <div className="box-4-4 border-primary h-[38.75px] w-[38.75px] border-t"></div>
      </div>
    </div>
  );
};

export default Logo;