import React from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import AllComponents from './components/AllComponents';

const App = () => {
  useSmoothScroll();
  return (
    <>
      <AllComponents />
    </>
  );
};

export default App;
