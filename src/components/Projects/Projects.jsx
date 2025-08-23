import React from 'react';
import ProjectCard from './ProjectCard';
import Square from '../ui/Square';
import projectsData from '../../data/data.js'; // adjust path as needed

const Projects = () => {
  return (
    <section className="relative mx-auto p-4 pt-[60px] sm:flex sm:max-w-[1200px] sm:flex-col sm:items-center sm:px-0">
      {/* Title of the projects section */}
      <div className="flex w-full items-start justify-center md:items-center md:justify-between">
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <h2 className="text-[28px] text-white md:text-[32px]">
            <span className="text-primary">#</span>projects
          </h2>
          <div className="bg-primary h-[1px] w-[245px] md:w-[511px]"></div>
        </div>

        <a
          href="#"
          className="after:bg-primary relative mt-2 text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full focus:after:w-0 active:after:w-0 md:mt-0"
        >
          View all ~~{'>'}
        </a>
      </div>

      <div className="mt-10 flex flex-col flex-wrap items-start justify-between gap-7 md:w-full md:flex-row">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            techStack={project.techStack}
            title={project.title}
            description={project.description}
            live={project.live}
            cached={project.cached}
          />
        ))}
      </div>

      <div className="absolute -right-64 top-70">
        <Square width={155} />
      </div>
    </section>
  );
};

export default Projects;
