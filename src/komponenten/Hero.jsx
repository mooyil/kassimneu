import React, { useEffect } from "react";
import "../styles/hero.css";
import bild from "../assets/kassim1.webp";
import bild1 from "../assets/kassim2.webp";
import bild2 from "../assets/kassim3.webp";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative h-[100vh] w-[100vw] overflow-hidden">
      <div
        data-aos="zoom-in-up"
        className="text-container3 flex flex-col max-w-[800px] text-center mx-auto justify-center p-4"
      >
        <div className="mb-6">
          <h1 className="text-5xl sm:text-[60px] md:text-[70px] lg:text-[80px] text-white font-bold">
            Nice to meet ya!
          </h1>
        </div>
        <div className="mb-6">
          <p className="text-white text-xl sm:text-2xl">
            "Be an improved version of yesterday."
          </p>
        </div>
        <div className="flex flex-row justify-center mb-4 sm:mb-4">
          <div className="px-4 shadow-lg">
            <div className="bg-accent text-gray-900 p-1.5">
              <Facebook sx={{ fontSize: 30, color: "white" }} />
            </div>
          </div>
          <div className="px-4 shadow-lg">
            <div className="bg-accent text-gray-900 p-1.5 ">
              <WhatsApp sx={{ fontSize: 30, color: "white" }} />
            </div>
          </div>
          <div className="px-4 shadow-lg">
            <div className="bg-accent text-gray-900 p-1.5 ">
              <Instagram sx={{ fontSize: 30, color: "white" }} />
            </div>
          </div>
        </div>
        <div className="mt-8 ">
          <a
            href="#"
            className="bg-accent hover:bg-background2 hover:text-accent duration-500 shadow-lg text-paragraphHell p-4 px-6 uppercase "
          >
            Erfahre Mehr
          </a>
        </div>
      </div>
      <div className=" ">
        {/* <div className='bg-fade' style={{backgroundImage: `url(${bild})`}}></div> */}
        <div
          className="bg-fade w-[100vw] h-[100%] my-auto"
          style={{
            backgroundImage: `url(${bild1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "10%",
          }}
        ></div>
        <div
          className="bg-fade w-[100vw] h-[100%] my-auto"
          style={{
            backgroundImage: `url(${bild2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "20%",
          }}
        ></div>
        <div
          className="bg-fade w-[100vw] h-[100%] my-auto"
          style={{
            backgroundImage: `url(${bild})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "30%",
          }}
        ></div>
        <div className="inset-0 h-full absolute bg-black opacity-60"></div>
      </div>
    </div>
  );
};

export default Hero;
