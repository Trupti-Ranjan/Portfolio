import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Logo from '../assets/Logo.svg';
import Toggle from '../assets/Toggle.svg';
import Cross from '../assets/Cross.svg';
import Github from '../assets/icons/Github';
import Gmail from '../assets/icons/Gmail';
import Linkedin from '../assets/icons/Linkedin';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const button = useRef();

  useGSAP(() => {
    const animation = gsap.fromTo(
      button.current,
      { x: 0 },
      { x: 30, duration: 1, repeat: -1, yoyo: true, ease: 'power1.inOut' }
    );
    return () => animation.kill();
  }, []);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (menuOpen) {
        gsap.set(mobileMenuRef.current, { display: 'flex' });
        gsap.fromTo(
          mobileMenuRef.current,
          { x: '100%' },
          { x: 0, duration: 1, ease: 'power3.out' }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          x: '100%',
          duration: 0.8,
          ease: 'power3.in',
          onComplete: () => {
            gsap.set(mobileMenuRef.current, { display: 'none' });
          },
        });
      }
    });

    return () => ctx.revert();
  }, [menuOpen]);

  useGSAP(() => {
    const context = gsap.context(() => {
      var tl = gsap.timeline();
      tl.from('.line', {
        y: -300,
        duration: 1,
        ease: 'power1.in',
      });

      tl.from('.link1', {
        y: -300,
        duration: 1,
        ease: 'bounce.out',
        scale: 0,
        stagger: 0.2,
      });
    });

    return () => context.revert();
  });

  return (
    <nav className="bg-background fixed -top-1 left-0 z-20 w-full">
      {!menuOpen && (
        <div className="hidden h-[310px] w-8 items-center gap-4 md:absolute md:left-[17px] md:flex md:flex-col">
          <div className="bg-gray line h-[191px] w-[1px]"></div>
          <div className="flex flex-col items-center justify-center gap-3">
            <a href="#" className="link1">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="link1">
              <Gmail className="h-5 w-5" />
            </a>
            <a href="#" className="link1">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}

      <div className="md:flex md:justify-center">
        <div className="relative flex h-[61px] sm:h-[101px] items-center justify-between px-4 pt-8 md:w-[1224px]">
          <a href="#" className="flex h-5 items-center gap-2">
            <img className="h-4" src={Logo} alt="Logo" />
            <h1 className="font-bold text-white">Trupti</h1>
          </a>

          {/* Desktop Menu */}
          <div className="hidden h-5 items-center gap-8 md:flex">
            <a href="#" className="text-white">
              <span className="text-primary">#</span>home
            </a>
            <a href="#" className="text-gray">
              <span className="text-primary">#</span>works
            </a>
            <a href="#" className="text-gray">
              <span className="text-primary">#</span>about-me
            </a>
            <a href="#" className="text-gray">
              <span className="text-primary">#</span>contacts
            </a>
            <a href="#" className="inline-block border border-white p-[1.5px]">
              <div className="bg-primary text-background px-6 py-1.5 font-semibold">
                Download CV
              </div>
            </a>
          </div>

          {/* Toggle Button */}
          <button
            className="relative z-50 flex h-6 w-6 items-center justify-center md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img
              src={Toggle}
              alt="open menu"
              className={`absolute h-6 w-6 transition-all duration-500 ease-in-out ${
                menuOpen
                  ? 'scale-50 rotate-90 opacity-0'
                  : 'scale-100 rotate-0 opacity-100'
              }`}
            />

            <img
              src={Cross}
              alt="close menu"
              className={`absolute h-6 w-6 transition-all duration-500 ease-in-out ${
                menuOpen
                  ? 'scale-100 rotate-0 opacity-100'
                  : 'scale-50 rotate-90 opacity-0'
              }`}
            />
          </button>

          {/* Mobile Menu (not conditionally rendered because od gsap) */}
          <div
            ref={mobileMenuRef}
            className="bg-background absolute top-[60px] left-0 z-40 hidden h-screen w-full flex-col items-start gap-8 px-4 py-6 pt-6 md:hidden"
          >
            <a href="#" className="mt-10 text-[32px] text-white">
              <span className="text-primary">#</span>home
            </a>
            <a href="#" className="text-gray text-[32px]">
              <span className="text-primary">#</span>works
            </a>
            <a href="#" className="text-gray text-[32px]">
              <span className="text-primary">#</span>about-me
            </a>
            <a href="#" className="text-gray text-[32px]">
              <span className="text-primary">#</span>contacts
            </a>
            <a href="#" className="text-gray text-[32px]">
              <span className="text-primary">#</span>Download CV
            </a>
            <div className="mt-[48px] flex w-full justify-center gap-6">
              <a href="#">
                <Github />
              </a>
              <a href="#">
                <Gmail />
              </a>
              <a href="#">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
