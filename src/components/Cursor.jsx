import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const cursorRef = useRef();

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        ease: 'power4.out',
      });
    };

    window.addEventListener('mousemove', moveCursor);

    const hoverTargets = document.querySelectorAll('a, button, .hover-target');

    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursorRef.current, {
          scale: 0.5,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });


    return () => {
      window.removeEventListener('mousemove', moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', () => {});
        el.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-50 h-7.5 w-7.5 -top-[14.5px] -left-[14.5px] rounded-full bg-primary"
    ></div>
  );
};

export default Cursor;
