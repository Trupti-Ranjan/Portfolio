// src/hooks/useSmoothScroll.js
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // keep ScrollTrigger in sync
    lenis.on("scroll", ScrollTrigger.update);

    // RAF for Lenis
    const raf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);

    // refresh triggers after Lenis is ready
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);
};
