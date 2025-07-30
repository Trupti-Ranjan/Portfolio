import React from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Navbar from './components/Navbar';

const App = () => {
  useSmoothScroll();
  return (
    <div className="bg-background h-screen font-fira">
      <Navbar />
    </div>
  );
};

export default App;
