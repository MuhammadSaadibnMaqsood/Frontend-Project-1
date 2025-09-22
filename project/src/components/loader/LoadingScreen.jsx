import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const LoadingScreen = (props) => {
  const location = useLocation().pathname;
  const div = useRef(null);
  const app = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(div.current, {
      display: "block",
    });
    tl.from(".stairs", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(".stairs", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(div.current, {
      display: "none",
    });

    tl.to(".stairs", {
      y: "0",
    });
    gsap.from(app.current, {
      opacity: 0,
      delay: 1.4,
      scale: 1.2,
    });
  }, [location]);
  return (
    <div className="overflow-x-hidden">
      <div ref={div} className="fixed w-full top-0 h-screen z-10">
        <div className=" w-full h-full  flex">
          <div className="h-full stairs w-1/5 bg-black"></div>
          <div className="h-full stairs w-1/5 bg-black"></div>
          <div className="h-full stairs w-1/5 bg-black"></div>
          <div className="h-full stairs w-1/5 bg-black"></div>
          <div className="h-full stairs w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={app}>{props.children}</div>
    </div>
  );
};

export default LoadingScreen;
