import React from 'react';

const ProjectCard = ({
  img,
  techStack,
  title,
  description,
  live,
  cached,
  livelink,
  cachedlink,
}) => {
  return (
    <div className="border-gray w-full border md:w-[332px]">
      <img src={img} alt="" className="w-full object-cover" />
      <p className="text-gray border-gray border-y px-2 py-2 text-[12px] font-normal md:text-lg">
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
          <a href={livelink} target="_blank" rel="noopener noreferrer">
            <button className="border-primary border px-4 py-2 text-[14px] font-medium text-white hover:cursor-pointer md:text-[16px]">
              {'Live <~>'}
            </button>
          </a>
        )}
        {cached && (
          <a href={cachedlink}>
            <button className="border-gray text-gray border px-4 py-2 text-[14px] font-medium hover:cursor-pointer md:text-[16px]">
              {'Cached >='}
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
