import React from 'react'

const SkillCard = ({ title, description }) => {
  return (
    <div className='border border-gray md:max-w-[210px] md:max-h-[100px]'>
      <h1 className='border-b border-gray p-2 text-white font-semibold'>{title}</h1>
      <p className='p-2 text-gray font-medium'>{description}</p>
    </div>
  )
}

export default SkillCard