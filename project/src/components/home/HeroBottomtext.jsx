import React from "react";
import { Link } from "react-router-dom";

const HeroBottomtext = () => {
  return (
    <div className="flex font-[font-2] items-center justify-center gap-5">
      <div className="border-3 flex hover:border-yellow-300 hover:text-yellow-300 transition-all duration-200 items-center justify-center border-white px-8 rounded-full uppercase  leading-[5.5vw]">
        <Link to="/projects" className=" text-[6vw]">
          Project
        </Link>
      </div>
      <div className="border-3 border-white hover:border-yellow-300 hover:text-yellow-300 transition-all duration-200 flex items-center justify-center px-8 rounded-full uppercase leading-[5.5vw]">
        <Link to="/agence" className=" text-[6vw] ">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HeroBottomtext;
