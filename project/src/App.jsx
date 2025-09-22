import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
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
  });
  return (
    <div>
      <div className="fixed top-0 w-full h-screen z-10 flex">
        <div className="h-full stairs w-1/5 bg-black"></div>
        <div className="h-full stairs w-1/5 bg-black"></div>
        <div className="h-full stairs w-1/5 bg-black"></div>
        <div className="h-full stairs w-1/5 bg-black"></div>
        <div className="h-full stairs w-1/5 bg-black"></div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agence" element={<Agence />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
