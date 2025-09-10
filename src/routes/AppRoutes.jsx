import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ViewMoreProject from '../pages/ViewMoreProject';
import AboutMeReadMore from '../pages/AboutMeReadMore';
import WorkInProgress from '../pages/WorkInProgress';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMeReadMore />} />
      <Route path="/projects" element={<ViewMoreProject />} />
      <Route path="/wip" element={<WorkInProgress />} />
      <Route path="*" element={<WorkInProgress />} />
    </Routes>
  );
};

export default AppRoutes;
