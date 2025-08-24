import React from 'react';
import aboutme from '../assets/images/aboutme.svg';
import Dot5X5 from './ui/Dot5X5';

const About = () => {
  return (
    <section className="mx-auto mb-10 p-4 sm:flex sm:max-w-[1200px] sm:flex-col sm:px-0">
      {/* Title Section of About */}
      <div className="mb-10 flex w-full flex-col items-start justify-center gap-5 md:flex-row md:items-center md:justify-start">
        <h2 className="text-[28px] text-white md:text-[32px]">
          <span className="text-primary">#</span>about-me
        </h2>
        <div className="bg-primary h-[1px] w-[240px] md:w-[239px]"></div>
      </div>

      <div className="relative flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between md:gap-0">
        <div className="md:w-[530px]">
          <p className="text-gray">
            Hello, I’m{' '}
            <span className="text-primary font-semibold">Trupti</span>!
            <br /> <br />
            I’m a{' '}
            <span className="text-primary font-semibold">
              self-taught front-end developer {" "}
            </span>
            based in{' '}
            <span className="text-primary font-semibold">Odisha, India</span>. I
            can develop{' '}
            <span className="text-primary font-semibold">
              responsive websites {" "}
            </span>
            from scratch and raise them into
            <span className="text-primary font-semibold">
              {' '}
              modern, user-friendly web experiences
            </span>
            .
            <br /> <br />
            Transforming my{' '}
            <span className="text-primary font-semibold">creativity</span> and
            <span className="text-primary font-semibold"> knowledge</span> into
            <span className="text-primary font-semibold"> websites</span> has
            been my passion for over a year. I have been helping{' '}
            <span className="text-primary font-semibold">
              clients establish their presence online
            </span>
            . I always strive to learn about the
            <span className="text-primary font-semibold">
              {' '}
              newest technologies and frameworks
            </span>
            .
          </p>

          <button className="border-primary mt-8 border px-4 py-2 text-white hover:cursor-pointer">
            Read More -{'>'}
          </button>
        </div>
        <div className="-top-28 right-1 md:absolute">
          <img
            src={aboutme}
            alt="About Me"
            loading="lazy"
            className="h-[300px] md:h-[480px]"
          />
          <div className="bg-primary h-[1px] w-[200px] md:w-[360px]"></div>
          <span className="absolute top-1 left-16 md:top-16 md:left-3">
            <Dot5X5 />
          </span>
          <span className="absolute top-48 right-16 md:top-70 md:left-52">
            <Dot5X5 rows={4} cols={5} gap={12} width={90} />
          </span>
          <span className="absolute top-80 -right-46 hidden md:block">
            <Dot5X5 rows={5} cols={5} gap={18} width={100} />
          </span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default About;
