import React from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import AllComponents from "../components/AllComponents";

const Home = () => {
  useSmoothScroll();
  return <AllComponents />;
};

export default Home;
