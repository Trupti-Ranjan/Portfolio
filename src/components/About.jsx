import React from 'react';
import aboutme from '../assets/images/aboutme.svg'
import Square from './ui/Square';

const About = () => {
  return (
    <section className="mx-auto p-4 sm:flex sm:max-w-[1200px] sm:flex-col sm:px-0">
      {/* Title Section of About */}
      <div className="mb-10 flex w-full flex-col items-start justify-center gap-5 md:flex-row md:items-center md:justify-start">
        <h2 className="text-[28px] text-white md:text-[32px]">
          <span className="text-primary">#</span>about-me
        </h2>
        <div className="bg-primary h-[1px] w-[240px] md:w-[239px]"></div>
      </div>

      <div className='flex'>
        <div className='w-[525px]'>
          <p className='text-gray'>
            Hello, i’m Trupti!<br /> <br />I’m a self-taught front-end developer based in
            Odisha, India. I can develop responsive websites from scratch and
            raise them into modern user-friendly web experiences.<br /> <br />Transforming
            my creativity and knowledge into a websites has been my passion for
            over a year. I have been helping various clients to establish their
            presence online. I always strive to learn about the newest
            technologies and frameworks.
          </p>
          <button className='px-4 py-2 mt-8 text-white border border-primary'>Read More -{">"}</button>
        </div>
        <div>
          <img src={aboutme} alt="About Me" loading='lazy'/>
          <span>
            <Square />
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
