import Logo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer className="border-gray border-t">
      <div className="h-[210px] md:mx-auto">
        <div className='h-[144px] flex items-center '>
          <div>
            <a href="#" className="flex h-5 items-center gap-4">
              <img className="h-4" src={Logo} alt="Logo" />
              <h1 className="font-bold text-white">Trupti</h1>
              <a
                href="#"
                className="after:bg-primary text-gray relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full ml-6"
              >
                truptiranjan272@gmail.com
              </a>
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
