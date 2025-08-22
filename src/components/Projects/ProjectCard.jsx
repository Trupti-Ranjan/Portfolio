import React from 'react';

const ProjectCard = ({ img, techStack, title, description, live, cached }) => {
  return (
    <div className="border-gray w-[360px] border md:w-[332px]">
      <img src={img} alt="" className="w-full object-cover" />
      <p className="text-gray border-gray border-b px-2 py-2 text-[12px] font-normal md:text-lg">
        {techStack}
      </p>
      <div>
        <h2 className="p-2 text-[20px] font-medium text-white md:text-2xl">
          {title}
        </h2>
        <p className="text-gray pt-2 pl-2 text-[14px] font-normal md:text-[16px]">
          {description}
        </p>
      </div>
      <div className="flex gap-3 px-2 py-4">
        {live && (
          <button className="border-primary border px-4 py-2 text-[14px] font-semibold text-white hover:cursor-pointer md:text-[16px]">
            {'Live <~>'}
          </button>
        )}
        {cached && (
          <button className="border-gray text-gray border px-4 py-2 text-[14px] font-semibold hover:cursor-pointer md:text-[16px]">
            {'Cached >='}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
