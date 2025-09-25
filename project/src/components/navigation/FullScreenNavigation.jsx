import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { navbarContext } from "../../context/NavContext";

const FullScreenNavigation = () => {
  const div = useRef(null);
  const fullScreenNavLink = useRef(null);
  const fullNav = useRef(null);
  const [navOpen, setnavOpen] = useContext(navbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.from(".stair", {
      delay: 0.5,
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.from(".navLinks", {
      opacity: 0,
    });

    tl.from(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.25,
      },
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.25,
      },
    });
    tl.to(".stair", {
      delay: 0.5,
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".navLinks", {
      opacity: 0,
    });
     gsap.to("#fullScreenNav", {
        display: "none",
      });
  }

  useGSAP(() => {
    if (navOpen) {
      gsap.to(fullNav.current, {
        display: "block",
      });
      gsapAnimation();
    } else {
     
      gsapAnimationReverse();
    }
  }, [navOpen]);
  return (
    <div
      id="fullScreenNav"
      ref={fullNav}
      className="h-screen z-50 w-full absolute overflow-x-hidden  text-white bg-black"
    >
      <div>
        <div ref={div} className="fixed w-full h-screen">
          <div className=" w-full h-full  flex">
            <div className="h-full stair w-1/5 bg-black"></div>
            <div className="h-full stair w-1/5 bg-black"></div>
            <div className="h-full stair w-1/5 bg-black"></div>
            <div className="h-full stair w-1/5 bg-black"></div>
            <div className="h-full stair w-1/5 bg-black"></div>
          </div>
        </div>
      </div>
      <div ref={fullScreenNavLink} className="relative ">
        <div className="flex navLinks justify-between items-center">
          <div className="pl-5 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="44"
              fill="white"
              viewBox="0 0 103 44"
            >
              <path
                fill-rule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setnavOpen(false)}
            className="h-24 w-44 relative group cursor-pointer pt-4 "
          >
            <div className="h-32 -rotate-45 origin-top w-1 bg-white absolute group-hover:bg-[#D3FD50]"></div>
            <div className="h-32 rotate-45 origin-top w-1 right-20 bg-white absolute group-hover:bg-[#D3FD50]"></div>
          </div>
        </div>
        <div>
          <div className=" pt-14">
            <div className="border-t-1 link origin-top relative border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
              <h1>Projects</h1>
              <div>
                <div className="absolute moveLink text-black top-0 flex ">
                  <div className="flex moveX  bg-[#D3FD50] items-center">
                    <h1 className="whitespace-nowrap border-t-1 border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
                      SEE EVERYTHING
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover rounded-full shrink-0"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt=""
                    />
                    <h1 className="border-t-1 whitespace-nowrap border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
                      SEE EVERYTHING
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover shrink-0 rounded-full"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex moveX bg-[#D3FD50] items-center">
                    <h1 className="whitespace-nowrap border-t-1 border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
                      SEE EVERYTHING
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover rounded-full shrink-0"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt=""
                    />
                    <h1 className="border-t-1 whitespace-nowrap border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
                      SEE EVERYTHING
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover shrink-0 rounded-full"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-1 link origin-top relative border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
              <h1>Agence</h1>
              <div>
                <div className="absolute moveLink text-black top-0 flex ">
                  <div className="flex moveX  bg-[#D3FD50] items-center">
                    <h1 className="whitespace-nowrap border-t-1 border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
                      KNOW US
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover rounded-full shrink-0"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                    <h1 className="border-t-1 whitespace-nowrap border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
                      KNOW US
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover shrink-0 rounded-full"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex moveX bg-[#D3FD50] items-center">
                    <h1 className="whitespace-nowrap border-t-1 border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
                      KNOW US
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover rounded-full shrink-0"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                    <h1 className="border-t-1 whitespace-nowrap border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
                      KNOW US
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover shrink-0 rounded-full"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-1 link origin-top relative border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
              <h1>Contact</h1>
              <div>
                <div className="absolute moveLink text-black top-0 flex ">
                  <div className="flex moveX  bg-[#D3FD50] items-center">
                    <h1 className="whitespace-nowrap border-t-1 border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
                      SEND US A FAX
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover rounded-full shrink-0"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                    <h1 className="border-t-1 whitespace-nowrap border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
                      SEND US A FAX
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover shrink-0 rounded-full"
                      src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex moveX bg-[#D3FD50] items-center">
                    <h1 className="whitespace-nowrap border-t-1 border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
                      SEND US A FAX
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover rounded-full shrink-0"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                    <h1 className="border-t-1 whitespace-nowrap border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
                      SEND US A FAX
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover shrink-0 rounded-full"
                      src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-y-1 link origin-top relative border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
              <h1>Blogs</h1>
              <div>
                <div className="absolute moveLink text-black top-0 flex ">
                  <div className="flex moveX bg-[#D3FD50] items-center">
                    <h1 className="whitespace-nowrap border-t-1 border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
                      READ ARTICLES
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover rounded-full shrink-0"
                      src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                      alt=""
                    />
                    <h1 className="border-t-1 whitespace-nowrap border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
                      READ ARTICLES
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover shrink-0 rounded-full"
                      src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                      alt=""
                    />
                  </div>
                  <div className="flex moveX bg-[#D3FD50] items-center">
                    <h1 className="whitespace-nowrap border-t-1 border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[8vw]">
                      READ ARTICLES
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover rounded-full shrink-0"
                      src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                      alt=""
                    />
                    <h1 className="border-t-1 whitespace-nowrap border-white text-center leading-[0.8] pt-2 font-[font2] uppercase text-[vw]">
                      READ ARTICLES
                    </h1>
                    <img
                      className="h-14 w-40 mx-10 object-cover shrink-0 rounded-full"
                      src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNavigation;
