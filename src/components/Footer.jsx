import Github from '../assets/icons/Github';
import Gmail from '../assets/icons/Gmail';
import Linkedin from '../assets/icons/Linkedin';
import Logo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer className="border-gray mt-10 border-t md:w-full">
      <div className="flex h-auto flex-col items-center justify-center px-4 py-6 md:mx-auto md:h-[210px]">
        <div className="flex w-full max-w-[1200px] flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo + Info */}
          <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            <div className="flex items-center gap-3">
              <img
                className="-p-2 h-5 transition duration-300 md:hover:bg-[#c778dd]/65 md:hover:text-[#c778dd] md:hover:shadow-[0_0_20px_6px_#c778dd]"
                src={Logo}
                alt="Logo"
              />
              <h1 className="font-bold text-white">Trupti</h1>
              {/* Email → only visible on desktop */}
              <a
                href="mailto:truptiranjan272@gmail.com"
                className="text-gray after:bg-primary relative ml-6 hidden after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full md:inline-block"
              >
                truptiranjan272@gmail.com
              </a>
            </div>
            <p className="text-white">Web designer and front-end developer</p>
          </div>

          {/* Media Links */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <p className="text-[20px] font-medium text-white">Media</p>
            <div className="flex items-center gap-5">
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
        </div>

        {/* Copyright */}
        <div className="text-gray mt-6 text-center">
          <p className="relative">Made by Trupti</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
