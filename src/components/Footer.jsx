import Github from '../assets/icons/Github';
import Gmail from '../assets/icons/Gmail';
import Linkedin from '../assets/icons/Linkedin';
import Logo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer className="border-t border-gray md:w-full">
      <div className="flex flex-col md:h-[210px] h-auto items-center justify-center md:mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full max-w-[1200px] gap-8">
          
          {/* Logo + Info */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <div className="flex items-center gap-3">
              <img className="h-5" src={Logo} alt="Logo" />
              <h1 className="font-bold text-white">Trupti</h1>
              {/* Email → only visible on desktop */}
              <a
                href="mailto:truptiranjan272@gmail.com"
                className="hidden md:inline-block relative ml-6 text-gray after:bg-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
              >
                truptiranjan272@gmail.com
              </a>
            </div>
            <p className="text-white">Web designer and front-end developer</p>
          </div>

          {/* Media Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-[20px] text-white">Media</p>
            <div className="flex items-center gap-5">
              <a href="#"><Github className="h-5 w-5" /></a>
              <a href="#"><Gmail className="h-5 w-5" /></a>
              <a href="#"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-gray text-center">
          <p>© {new Date().getFullYear()} Trupti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
