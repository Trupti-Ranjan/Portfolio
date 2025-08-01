import React from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import AllComponents from './components/AllComponents';

const App = () => {
  useSmoothScroll();
  return (
    <div className='h-screen bg-background'>
      <AllComponents />
    </div>
  );
};

export default App;
