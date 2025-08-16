import React from 'react'

const Square = ({ width }) => {
  return (
    <div style={{ width: `${width}px`, height: `${width}px` }}
      className="border border-gray">
      
    </div>
  )
}

export default Square