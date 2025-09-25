import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const imagesArray = [
  "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
];

const Agence = () => {
  const imageDiv = useRef(null);
  const image = useRef(null);

  useGSAP(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Ensure refs are available
    if (imageDiv.current && image.current) {
      gsap.to(imageDiv.current, {
        scrollTrigger: {
          trigger: imageDiv.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top 27%",
          end: "bottom -140%",
          anticipatePin: 1,
          markers: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            console.log(self);

            const index = Math.min(
              Math.floor(self.progress * imagesArray.length),
              imagesArray.length - 1
            );
            if (image.current.src !== imagesArray[index]) {
              image.current.src = imagesArray[index]; // Update image source
            }
          },
        },
      });
    }
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="relative">
      <div className="section1  min-h-screen">
        <div
          ref={imageDiv}
          className="h-[20vw]  w-[15vw] absolute top-40 left-[30vw] rounded-4xl overflow-hidden z-10"
        >
          <img
            ref={image}
            className="w-full h-full object-cover"
            src={imagesArray[0]} // Set initial image from the array
            alt="Team Member"
          />
        </div>

        <div className="font-[font-2] relative py-1">
          <div className="mt-[52vh]">
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
              a personality, and a story. If we ignore that, we can achieve
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
