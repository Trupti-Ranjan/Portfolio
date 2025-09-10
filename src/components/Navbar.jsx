import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Logo from '../assets/Logo.svg';
import Toggle from '../assets/Toggle.svg';
import Cross from '../assets/Cross.svg';
import Github from '../assets/icons/Github';
import Gmail from '../assets/icons/Gmail';
import Linkedin from '../assets/icons/Linkedin';
import cvFile from '../assets/Trupti-Ranjan-Barik-CV.pdf';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [showPopup, setShowPopup] = useState(false); // popup state
  const mobileMenuRef = useRef(null);
  const button = useRef();

  // ✅ Handle CV Download with popup
  const handleDownload = () => {
    setShowPopup(true);

    // Auto hide popup after 2s
    setTimeout(() => setShowPopup(false), 2000);

    // Trigger download after short delay
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = cvFile;
      link.download = 'Trupti_CV.pdf';
      link.click();
    }, 800);
  };

  // Detect active section
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Handle mobile menu back button
  useEffect(() => {
    const handlePopState = () => setMenuOpen(false);
    if (menuOpen) {
      window.history.pushState({ menu: true }, '');
      window.addEventListener('popstate', handlePopState);
    }
    return () => window.removeEventListener('popstate', handlePopState);
  }, [menuOpen]);

  // GSAP animations
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
          onComplete: () =>
            gsap.set(mobileMenuRef.current, { display: 'none' }),
        });
      }
    });
    return () => ctx.revert();
  }, [menuOpen]);

  const links = [
    { id: 'home', label: 'home' },
    { id: 'works', label: 'works' },
    { id: 'about', label: 'about-me' },
    { id: 'contact', label: 'contacts' },
  ];

  return (
    <nav className="bg-background fixed -top-1 left-0 z-20 w-full">
      {/* Left Social Icons */}
      {!menuOpen && (
        <div className="hidden h-[310px] w-8 items-center gap-4 md:absolute md:left-[17px] md:flex md:flex-col">
          <div className="bg-gray line h-[191px] w-[1px]"></div>
          <div className="flex flex-col items-center justify-center gap-3">
            <a
              href="https://github.com/Trupti-Ranjan/"
              target="_blank"
              rel="noopener noreferrer"
              className="-p-2 rounded-full transition duration-300 md:hover:bg-[#c778dd]/65 md:hover:text-[#c778dd] md:hover:shadow-[0_0_20px_6px_#c778dd]"
            >
              {' '}
              <Github className="h-5 w-5" />{' '}
            </a>
            <a
              href="mailto:truptiranjan272@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="-p-2 rounded transition duration-300 md:hover:bg-[#c778dd]/65 md:hover:text-[#c778dd] md:hover:shadow-[0_0_20px_6px_#c778dd]"
            >
              <Gmail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/trupti-ranjan/"
              target="_blank"
              rel="noopener noreferrer"
              className="-p-2 rounded transition duration-300 md:hover:bg-[#c778dd]/65 md:hover:text-[#c778dd] md:hover:shadow-[0_0_20px_6px_#c778dd]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}

      <div className="md:flex md:justify-center">
        <div className="relative flex h-[61px] items-center justify-between px-4 pt-8 sm:h-[101px] md:w-[1224px]">
          {/* Logo */}
          <a href="#home" className="flex h-5 items-center gap-2 font-bold">
            <img className="h-4 -p-2 transition duration-300 md:hover:bg-[#c778dd]/65 md:hover:text-[#c778dd] md:hover:shadow-[0_0_20px_6px_#c778dd]" src={Logo} alt="Logo" />
            <h1 className="font-bold text-white">Trupti</h1>
          </a>

          {/* Desktop Menu */}
          <div className="hidden h-5 items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors ${active === link.id ? 'font-bold text-white' : 'text-gray'}`}
              >
                <span className="text-primary">#</span>
                {link.label}
              </a>
            ))}
            <button
              onClick={handleDownload}
              className="inline-block border border-white p-[1.5px]"
            >
              <div className="bg-primary text-background px-6 py-1.5 font-semibold">
                Download CV
              </div>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="relative z-50 flex h-6 w-6 items-center justify-center md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img
              src={Toggle}
              alt="open menu"
              className={`absolute h-6 w-6 transition-all duration-500 ease-in-out ${menuOpen ? 'scale-50 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`}
            />
            <img
              src={Cross}
              alt="close menu"
              className={`absolute h-6 w-6 transition-all duration-500 ease-in-out ${menuOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-50 rotate-90 opacity-0'}`}
            />
          </button>

          {/* Mobile Menu */}
          <div
            ref={mobileMenuRef}
            className="bg-background absolute top-[60px] left-0 z-40 hidden h-screen w-full flex-col items-start gap-8 overflow-visible px-4 py-6 pt-6 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`mt-4 text-[32px] ${active === link.id ? 'font-bold text-white' : 'text-gray'}`}
              >
                <span className="text-primary">#</span>
                {link.label}
              </a>
            ))}
            <button
              onClick={handleDownload}
              className="text-gray pointer-events-auto mt-6 text-[32px]"
            >
              <span className="text-primary">#</span>Download CV
            </button>

            <div className="mt-[48px] flex w-full justify-center gap-6">
              <a
                href="https://github.com/Trupti-Ranjan/"
                target="_blank"
                rel="noopener noreferrer"
                className="link1"
              >
                <Github />
              </a>
              <a
                href="mailto:truptiranjan272@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link1"
              >
                <Gmail />
              </a>
              <a
                href="https://www.linkedin.com/in/trupti-ranjan/"
                target="_blank"
                rel="noopener noreferrer"
                className="link1"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Animated Toast Popup */}
      {showPopup && (
        <div className="animate-fade-in pointer-events-auto fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-lg bg-[#c778dd] px-4 py-3 text-white shadow-lg">
          {/* Spinner */}
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          <span>📥 Download in progress...</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
