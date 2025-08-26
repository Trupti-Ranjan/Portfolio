import React from 'react';
import Dot5X5 from '../ui/Dot5X5';
import Square from '../ui/Square';
import BoxLogo from '../ui/BoxLogo';
import SkillCard from './SkillCard';

const Skills = () => {
  const skillsData = [
    {
      title: 'Language',
      description: 'JavaScript, Python, C++',
    },
    {
      title: 'Framework',
      description: 'React, Tailwind, Express',
    },
    {
      title: 'Database',
      description: 'MongoDB, MySQL',
    },
    {
      title: 'Version Control',
      description: 'Git, GitHub',
    },
    {
      title: 'Tools',
      description: 'VSCode, Figma, Linux',
    },
  ];
  return (
    <section className="mx-auto p-4 pt-[60px] sm:flex sm:max-w-[1200px] sm:flex-col sm:items-center sm:px-0">
      {/* Title Section of Skills */}
      <div className="mb-10 flex w-full flex-col items-start justify-center gap-5 md:flex-row md:items-center md:justify-start">
        <h2 className="text-[28px] font-medium text-white md:text-[32px]">
          <span className="text-primary">#</span>skills
        </h2>
        <div className="bg-primary h-[1px] w-[240px] md:w-[239px]"></div>
      </div>

      <div className="flex h-[500px] w-full gap-16 md:h-[400px]">
        <div className="relative hidden w-2/5 sm:block">
          <span className="absolute top-6 left-8">
            <Dot5X5 />
          </span>
          <span className="absolute top-36 left-60">
            <Dot5X5 />
          </span>
          <span className="absolute -top-4 right-14">
            <Square width={90} />
          </span>
          <span className="absolute top-52 right-7">
            <Square width={65} />
          </span>
          <span className="absolute top-44 left-7">
            <BoxLogo />
          </span>
        </div>

        <div className="text-gray flex flex-row flex-wrap content-start gap-10 sm:pr-0 sm:pl-0 sm:text-[14px] md:ml-17 md:w-3/5 md:justify-end">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              className="flex-grow-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
