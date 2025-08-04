import React from 'react';
import heroImage from '../assets/heroImage.svg';
import doublequoats from '../assets/images/doublequoats.svg';
import Dot4X4 from './Dot4X4';
import BoxLogo from './BoxLogo';

const HeroSection = () => {
  return (
    <>
      <section className="mt-20 flex w-full items-center justify-between">
        <div className="flex h-[230px] w-[540px] flex-col justify-between">
          <h1 className="text-[32px] text-white">
            Trupti is a <span className="text-primary">web designer</span> and{' '}
            <span className="text-primary">front-end developer</span>{' '}
          </h1>
          <p className="text-gray">
            He crafts responsive websites where technologies meet creativity
          </p>

          <button className="group  border-gray relative flex h-[3.5em] cursor-pointer items-center justify-start self-start overflow-hidden border px-4 pr-14 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-black">
            <a href='#' className=" hover-target z-10 px-4 text-[16px]">Contact me!!</a>
            <div className="bg-primary absolute right-[0.1em] flex h-[3em] w-[3em] items-center justify-center transition-all duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[calc(100%-0.3em)] group-active:scale-90"></div>
          </button>
        </div>

        <div className="relative h-[386px] w-[469px]">
          <img
            src={heroImage}
            alt="Profile Photo"
            className="absolute z-10 h-full w-full object-cover"
          />

          <div className="absolute right-10 bottom-16 z-10">
            <Dot4X4 />
          </div>

          <div className="absolute top-20 -left-4">
            <BoxLogo />
          </div>

          <div className="border-gray absolute -bottom-[37px] left-[17px] flex h-[37px] w-[415px] items-center gap-3 border p-2">
            <div className="bg-primary h-4 w-4"></div>
            <p className="text-gray text-[16px] font-medium">
              Currently working on{' '}
              <span className="font-semibold text-white"> Portfolio </span>
            </p>
          </div>
        </div>
      </section>

      <section className="mt-32 flex flex-col items-end justify-center">
        <div className="border-gray relative border p-8">
          <img src={doublequoats} alt="" className="absolute -top-4 left-3" />
          <p className="text-2xl text-white">
            With great power comes great electricity bill
          </p>
          <img
            src={doublequoats}
            alt=""
            className="absolute right-3 -bottom-3.5"
          />
        </div>

        <div className="border-gray relative border border-t-0 p-4">
          <p className="text-2xl text-white">- Dr. Who</p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
