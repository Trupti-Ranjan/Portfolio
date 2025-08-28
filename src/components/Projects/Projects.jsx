import React from 'react';
import ProjectCard from './ProjectCard';
import Square from '../ui/Square';
import projectsData from '../../data/data.js'; // adjust path as needed

const Projects = () => {
  return (
    <section
      id="works"
      className="relative mx-auto w-full scroll-mt-20 p-4 pt-[60px] sm:flex sm:max-w-[1200px] sm:flex-col sm:items-center sm:px-0"
    >
      {/* Title of the projects section */}
      <div className='flex flex-col gap-5'>
        <div className="flex items-center justify-between">
          <h2 className="text-[28px] font-medium text-white md:text-[32px]">
            <span className="text-primary">#</span>projects
          </h2>
          <a href="#" className="text-white">
            View all ~~{'>'}
          </a>
        </div>
        <div className='h-[2px] w-3/5 bg-primary '></div>
      </div>
      {/* after:bg-primary w-fit h-fit border font-medium text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full focus:after:w-0 active:after:w-0 md:mt-0 */}
      <div className="mt-10 flex flex-col flex-wrap items-center justify-between gap-7 md:w-full md:flex-row">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            techStack={project.techStack}
            title={project.title}
            description={project.description}
            live={project.live}
            cached={project.cached}
            livelink={project.livelink}
          />
        ))}
      </div>

      <div className="absolute top-70 -right-64">
        <Square width={155} />
      </div>
    </section>
  );
};

export default Projects;
