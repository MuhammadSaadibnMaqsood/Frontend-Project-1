import React from "react";
import Video from "../components/home/Video";
import HeroText from "../components/home/HeroText";
import HeroBottomtext from "../components/home/HeroBottomtext";

const Home = () => {
  return (
    <div>
      <div className="h-screen fixed w-screen">
        <Video />
      </div>
      <div className="h-screen flex flex-col justify-between overflow-hidden w-screen relative text-white">
        <HeroText />
        <HeroBottomtext />
      </div>
    </div>
  );
};

export default Home;
