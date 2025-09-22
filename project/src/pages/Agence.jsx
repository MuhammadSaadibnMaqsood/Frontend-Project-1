import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // 👈 ye import lazmi hai
import React, { useRef } from "react";

const imagesArray = [
  "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
];

const Agence = () => {
  const imageDiv = useRef(null);
  const image = useRef(null);

  useGSAP(function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(imageDiv.current, {
      scrollTrigger: {
        trigger: imageDiv.current,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        start: "top 27%",
        end: "top -140%",
        onUpdate: (self) => {
          let index = Math.floor(self.progress * imagesArray.length);
          if (index >= imagesArray.length) index = imagesArray.length - 1;
          image.current.src = imagesArray[index];
        },
      },
    });
  });

  return (
    <div>
      <div className="section1">
        <div
          ref={imageDiv}
          className="h-[20vw] w-[15vw] absolute top-40 left-[30vw] rounded-4xl overflow-hidden"
        >
          <img
            ref={image}
            className="w-full h-full object-cover"
            src="http://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>

        <div className="font-[font-2] relative py-1">
          <div className="mt-[52vh] ">
            <h1 className="text-[19vw] leading-[17vw] font-bold text-center">
              SEVEN7Y <br />
              TWO
            </h1>
          </div>

          <div className="pl-[45%] mt-10">
            <p className="text-5xl font-bold">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
              inquisitive and open-minded, and we make sure creativity crowds
              out ego from every corner. A brand is a living thing, with values,
              a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We
              bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
