import React, { useState } from "react";
import logo from "../Assets/images/logo.png";
import { navLinks } from "../../constants";
import Link from "./subComponent/Link";
import Button from "./subComponent/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row md:justify-between md:items-center md:py-12 py-4">
      {/* Desktop */}
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-10 justify-end items-center relative">
        <div className="md:flex gap-16 hidden">
          {navLinks.map((item, index) => (
            <Link key={index} link={item} color="text-[#202536]" href={item.href} />
          ))}
        </div>
        <span className="absolute top-6  md:static">
          <Button text="Contact Us" />
        </span>
      </div>

      {/* Mobile */}
      <button
        className={`absolute top-30 transition-transform duration-300 md:hidden ${
          menuOpen ? "rotate-90" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Drop Down */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          menuOpen ? "max-h-[500px] opacity-100 mt-24" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-5">
          {navLinks.map((item, index) => (
            <div
              key={index}
              className="px-2 py-3 bg-[#202536] rounded-md text-center"
            >
              <Link link={item} color="text-white" href={item.href} />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
