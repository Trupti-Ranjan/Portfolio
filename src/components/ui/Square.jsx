import React from 'react'

const Square = ({ width }) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${width}px` }}
      className="border border-gray hidden md:block"
    >
    </div>
  )
}

export default Square