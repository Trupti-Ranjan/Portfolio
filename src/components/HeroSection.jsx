import React from 'react';
import heroImage from '../assets/heroImage.svg';
import doublequoats from '../assets/images/doublequoats.svg';
import Dot4X4 from './ui/Dot4X4';
import BoxLogo from './ui/BoxLogo';
import Square from './ui/Square';

const HeroSection = () => {
  return (
    <section className="mx-auto p-4 pt-[60px] sm:flex sm:max-w-[1200px] sm:flex-col sm:items-center sm:px-0">
      <div className="mt-20 flex w-full flex-col justify-center sm:flex-row sm:items-center sm:justify-between">
        {/* This is the left section of the herosection */}
        <div className="flex flex-col justify-between gap-6 sm:h-[230px] sm:w-[540px]">
          <h1 className="text-3xl text-white sm:text-[32px]">
            Trupti is a <span className="text-primary">web designer</span> and{' '}
            <span className="text-primary">front-end developer</span>{' '}
          </h1>
          <p className="text-gray">
            He crafts responsive websites where technologies meet creativity
          </p>

          <button className="group border-gray relative flex h-[3.5em] cursor-pointer items-center justify-start self-start overflow-hidden border px-4 pr-14 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-black">
            <a href="#" className="hover-target z-10 px-4 text-[16px]">
              Contact me!!
            </a>
            <div className="bg-primary absolute right-[0.1em] flex h-[3em] w-[3em] items-center justify-center transition-all duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[calc(100%-0.3em)] group-active:scale-90"></div>
          </button>
        </div>

        {/* this is the right section */}
        <div className="relative flex h-[350px] min-w-fit items-center justify-center sm:my-0 sm:h-[386px] sm:w-[469px]">
          <img
            src={heroImage}
            alt="Profile Photo"
            className="absolute z-10 h-[70%] object-cover sm:h-full sm:w-full"
          />

          <div className="absolute right-10 bottom-16 z-10">
            <Dot4X4 />
          </div>

          <div className="absolute top-20 -left-4 h-[200px]">
            <BoxLogo />
          </div>

          <div className="border-gray absolute bottom-[13px] flex w-[90vw] max-w-[420px] items-center gap-3 border p-2 sm:-bottom-[43px] sm:left-[17px] sm:w-[418px]">
            <div className="bg-primary h-4 w-4"></div>
            <p className="text-gray text-[14px] font-medium sm:text-[16px]">
              Currently working on{' '}
              <span className="font-semibold text-white">Portfolio</span>
            </p>
          </div>
        </div>
      </div>

      {/* This is the quote section */}
      <div className="mt-20 flex flex-col items-end justify-center sm:mt-32">
        <div className="border-gray relative border p-8">
          <img src={doublequoats} alt="" className="absolute -top-4 left-3" />
          <p className="text-xl text-white sm:text-2xl">
            With great power comes great electricity bill
          </p>
          <img
            src={doublequoats}
            alt=""
            className="absolute right-3 -bottom-3.5"
          />
        </div>

        <div className="border-gray relative border border-t-0 p-4">
          <p className="text-xl text-white sm:text-2xl">- Dr. Who</p>
        </div>

        <div className="absolute -right-4 ">
          <Square width={91} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
