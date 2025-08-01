import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BoxLogo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const staggerConfig = {
        each: 0.05,
        from: 'start',
      };

      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      tl.to(
        '.box-1-1',
        { duration: 0.5, borderLeftWidth: 1, borderBottomWidth: 0 },
        0
      )
        .to(
          '.box-1-2',
          {
            duration: 0.5,
            borderLeftWidth: 1,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRightWidth: 0,
          },
          0.05
        )
        .to(
          '.box-1-3',
          {
            duration: 0.5,
            borderRightWidth: 2,
            borderBottomWidth: 2,
            borderTopWidth: 0,
            borderLeftWidth: 0,
          },
          0.1
        )
        .to(
          '.box-1-4',
          {
            duration: 0.5,
            borderRightWidth: 2,
            borderBottomWidth: 2,
            borderTopWidth: 0,
            borderLeftWidth: 0,
          },
          0.15
        );

      tl.to(
        '.box-2-1',
        {
          duration: 0.5,
          borderTopWidth: 2,
          borderRightWidth: 2,
          borderBottomWidth: 0,
          borderLeftWidth: 0,
        },
        0.2
      )
        .to(
          '.box-2-2',
          {
            duration: 0.5,
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
          },
          0.25
        )
        .to(
          '.box-2-3',
          {
            duration: 0.5,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderLeftWidth: 1,
          },
          0.3
        )
        .to(
          '.box-2-4',
          {
            duration: 0.5,
            borderRightWidth: 2,
            borderBottomWidth: 0,
            borderTopWidth: 0,
            borderLeftWidth: 1,
          },
          0.35
        );

      tl.to(
        '.box-3-1',
        {
          duration: 0.5,
          borderTopWidth: 0,
          borderRightWidth: 2,
          borderBottomWidth: 2,
          borderLeftWidth: 2,
        },
        0.4
      )
        .to(
          '.box-3-2',
          {
            duration: 0.5,
            borderLeftWidth: 1,
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
          },
          0.45
        )
        .to(
          '.box-3-3',
          {
            duration: 0.5,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
          },
          0.5
        )
        .to(
          '.box-3-4',
          {
            duration: 0.5,
            borderRightWidth: 2,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          0.55
        );

      tl.to(
        '.box-4-1',
        {
          duration: 0.5,
          borderLeftWidth: 2,
          borderTopWidth: 2,
          borderRightWidth: 0,
          borderBottomWidth: 0,
        },
        0.6
      )
        .to(
          '.box-4-2',
          {
            duration: 0.5,
            borderTopWidth: 2,
            borderRightWidth: 1,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
          },
          0.65
        )
        .to(
          '.box-4-3',
          {
            duration: 0.5,
            borderLeftWidth: 1,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRightWidth: 0,
          },
          0.7
        )
        .to(
          '.box-4-4',
          {
            duration: 0.5,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 1,
            borderRightWidth: 0,
          },
          0.75
        );
    }, containerRef);

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

export default BoxLogo;
