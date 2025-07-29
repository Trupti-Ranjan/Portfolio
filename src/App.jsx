import React from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';

const App = () => {
  useSmoothScroll();
  return (
    <>
      <div className="bg-red-100 h-screen">App</div>
      <div className="bg-red-200 h-screen">App</div>
      <div className="bg-red-300 h-screen">App</div>
      <div className="bg-red-600 h-screen">App</div>
      <div className=''></div>
    </>
  );
};

export default App;
