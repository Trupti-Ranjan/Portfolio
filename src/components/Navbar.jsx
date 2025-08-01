import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import Toggle from '../assets/Toggle.svg';
import Cross from '../assets/Cross.svg';
import Github from '../assets/icons/Github';
import Gmail from '../assets/icons/Gmail';
import Linkedin from '../assets/icons/Linkedin';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background">
      {!menuOpen && (
        <div className="hidden h-[310px] w-8 items-center gap-4 md:absolute md:left-[17px] md:flex md:flex-col">
          <div className="bg-gray h-[191px] w-[1px]"></div>
          <div className="flex flex-col items-center justify-center gap-3">
            <a href="#">
              <Github className="h-5 w-5" />
            </a>
            <a href="#">
              <Gmail className="h-5 w-5" />
            </a>
            <a href="#">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}

      <div className='md:flex md:justify-center'>
        <div className="relative flex h-[61px] items-center justify-between px-4 pt-8 md:w-[1224px]">
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
          </div>

          <button
            // className="flex md:hidden z-50"
            className={`flex transition-transform duration-300 md:hidden z-50${
              menuOpen ? 'rotate-90' : ''
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img
              src={menuOpen ? Cross : Toggle}
              alt="menu toggle"
              className="h-6 w-6 transition-transform duration-300"
            />
          </button>

          {menuOpen && (
            <div className="bg-background absolute top-[60px] pt-6 left-0 z-40 flex w-full h-screen flex-col items-start gap-8 px-4 py-6 md:hidden">
              <a href="#" className="text-[32px] text-white mt-10">
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

              <div className="mt-[88px] flex w-full justify-center gap-6">
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
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
