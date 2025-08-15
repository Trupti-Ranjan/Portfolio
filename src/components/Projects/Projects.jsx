import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="mx-auto p-4 pt-[60px] sm:flex sm:max-w-[1200px] sm:flex-col sm:items-center sm:px-0">
      {/* Title of the projects section */}
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-5">
          <h2 className="text-[32px] text-white">
            <span className="text-primary">#</span>projects
          </h2>
          <div className="bg-primary h-[2px] w-[511px]"></div>
        </div>

        <a
          href="#"
          className="after:bg-primary relative text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
        >
          View all ~~{'>'}
        </a>
      </div>

      {/* Project Card */}
      <ProjectCard />
    </section>
  );
};

export default Projects;
