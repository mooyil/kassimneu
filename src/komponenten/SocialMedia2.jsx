import React, { useState, useRef, useEffect, useContext } from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import nba from "../assets/nba.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MyContext } from "../context/ContextProvider";

const SocialMedia2 = () => {

  const { translate, setTranslate } = useContext(MyContext);


  const obj1 = {
    height: "500px",
    width: "1200px",
  };

  const obj2 = {
    heigth: "500px",
    width: "750px",
  };

  const obj3 = {
    heigth: "400px",
    width: "400px",
  };

  const obj4 = {
    heigth: "400px",
    width: "270px",
  };

  const post = [
    "https://www.instagram.com/p/Cq9bwrDMgRd/?utm",
    "https://www.instagram.com/p/Cq9bwrDMgRd/?utm",
    "https://www.instagram.com/p/Cq9bwrDMgRd/?utm",
    "https://www.instagram.com/p/Cq9bwrDMgRd/?utm",
    "https://www.instagram.com/p/Cq9bwrDMgRd/?utm",
    "https://www.instagram.com/p/Cq9bwrDMgRd/?utm",
    "https://www.instagram.com/p/Cq9bwrDMgRd/?utm",
    "https://www.instagram.com/p/Cq9bwrDMgRd/?utm",
  ];

  const [width, setWidth] = useState(0);
  const carusel = useRef();

  useEffect(() => {
    setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth);
  }, []);

  return (
    <section
      ref={carusel}
      //   style={{ backgroundImage: `url(${bild})` }}
      className="p-6 py-12 bg-accent border-b-2  border-b-background2 overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className=" text-paragraphHell text-3xl sm:text-4xl ">
          {translate ? "My Social Media" : "Mein Social Media"}
        </h2>
        <div className="flex justify-center">
          <hr className="w-[100px] h-[2px] border-none font-extrabold bg-background1" />
          <hr className="w-[150px] h-[2px] border-none font-extrabold bg-background1" />
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="mb-4">
            <h3 className="text-2xl text-paragraphHell text-center">
              Instagram
            </h3>
          </div>
        </div>

        <div className="  ">
          <div className="mb-12">
            <Splide
              options={{
                arrows: false,
                pagination: false,
                autoplay: true,
                type: "loop",
                rewind: true,
                perMove: 1,
                speed: 50000,
                pauseOnHover: false,
                breakpoints: {
                  760: {
                    perPage: 1,
                    gap: "5em",
                  },
                  1060: {
                    perPage: 2,
                  },
                  5800: {
                    perPage: 3,
                  },
                },
              }}
              >
              {post.map((element, index) => {
                return (
                  <SplideSlide
                    key={index}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div>
                      <img src={nba} alt="nba" className="rounded-lg " />
                    </div>
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia2;
