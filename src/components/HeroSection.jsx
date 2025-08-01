import React from 'react';
import heroImage from '../assets/heroImage.svg';
import Dot4X4 from './Dot4X4';
import BoxLogo from './BoxLogo';

const HeroSection = () => {
  return (
    <section className="mt-20 flex w-full items-center justify-between">

      {/* Left Side content */}
      <div className="flex h-[230px] w-[540px] flex-col justify-between">
        <h1 className="text-[32px] text-white">
          Trupti is a <span className="text-primary">web designer</span> and{' '}
          <span className="text-primary">front-end developer</span>{' '}
        </h1>
        <p className="text-gray">
          He crafts responsive websites where technologies meet creativity
        </p>
        <a href="#cv">
          <button className="group border-gray relative flex h-[3.5em] cursor-pointer items-center justify-start self-start overflow-hidden border px-4 pr-14 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-black">
            <span className="z-10 px-4 text-[16px]">Contact me!!</span>
            <div className="bg-primary absolute right-[0.1em] flex h-[3em] w-[3em] items-center justify-center transition-all duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[calc(100%-0.3em)] group-active:scale-90"></div>
          </button>
        </a>
      </div>

      {/* Right Side content */}
      <div className="relative h-[386px] w-[469px]">
        <img
          src={heroImage}
          alt="Profile Photo"
          className="absolute z-10 h-full w-full object-cover"
        />

        <div className="absolute right-10 bottom-16 z-20">
          <Dot4X4 />
        </div>

        <div className="absolute top-20 -left-4">
          <BoxLogo />
        </div>

        <div className="border-gray absolute -bottom-[37px] left-[17px] h-[37px] w-[415px] border flex items-center p-2 gap-3">
          <div className="bg-primary h-4 w-4"></div>
          <p className='text-[16px] text-gray font-medium'>
            Currently working on <span className='font-semibold text-white'> Portfolio </span>
          </p>
        </div>
      </div>

      {/* Quote content */}
      <div className=''><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil perspiciatis porro modi exercitationem debitis fuga omnis animi ipsam magni. Dicta.</p></div>
    </section>
  );
};

export default HeroSection;
