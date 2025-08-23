import React from "react";

const Dot5X5 = ({ rows = 5, cols = 5, width = 66, gap = 13 }) => {
  const rowArray = Array.from({ length: rows });
  const colArray = Array.from({ length: cols });

  return (
    <div className="flex flex-col" style={{ gap: `${gap}px` }}>
      {rowArray.map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-between"
          style={{ width: `${width}px` }}
        >
          {colArray.map((_, colIndex) => (
            <div
              key={colIndex}
              className="dot h-1 w-1 rounded-full bg-gray-400"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dot5X5;
