import React from "react";
import Video from "./Video";

const HeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[9vw] uppercase leading-[8vw] flex justify-center items-center">
        The spark for
      </div>
      <div className="text-[9vw] uppercase leading-[8vw] flex justify-center items-center">
        {" "}
        all{" "}
        <div className="h-[16vh] rounded-full overflow-hidden">
          <Video />
        </div>{" "}
        things
      </div>
      <div className="text-[9vw] uppercase leading-[8vw] flex justify-center items-center ">
        Creactive
      </div>
    </div>
  );
};

export default HeroText;
