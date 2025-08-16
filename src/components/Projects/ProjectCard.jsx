import React from 'react'


const ProjectCard = ({ img, techStack, title, description, live, cached }) => {
  return (
    <div className='w-[332px] border border-gray'>
      <img src={img} alt="" />
      <p className='text-gray px-2 py-2 border-b border-gray font-normal'>{techStack}</p>
      <div>
        <h2 className='font-medium text-2xl p-2 text-white'>{title}</h2>
        <p className='pl-2 pt-2 text-gray font-normal text-[16px]'>{description}</p>
      </div>
      <div className='py-4 px-2 flex gap-3'>
        {live && <button className='px-4 py-2 border border-primary text-white font-semibold'>{"Live <~>"}</button>}
        {cached && <button className='px-4 py-2 border border-gray text-gray font-semibold'>{"Cached >="}</button>}
      </div>
    </div>
  )
}

export default ProjectCard