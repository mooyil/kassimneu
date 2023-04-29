import React, { useContext, useEffect } from "react";
import kassim from "../assets/kassim4.png";
import Logo from "../assets/logor.png";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { FunctionsOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import { heroContent } from "../content/hero";
import { MyContext } from "../context/ContextProvider";

const Hero2 = () => {
  const { translate, setTranslate } = useContext(MyContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [toggleInfo, setToggleInfo] = React.useState(true);

  function toggle() {
    setToggleInfo((prevInfo) => !prevInfo);
  }

  const toggleTranslate = () => {
    setTranslate((prev) => !prev);
  };

  return (
    <div
      className=" bg-background2 text-paragraph h-[100vh] "
      //   style={{ backgroundImage: `url(${Bild1})` }}
    >
      <div className="flex md:flex-row flex-col justify-between space-x-10">
        <div
          data-aos="zoom-in-up"
          className="flex flex-col sm:w-1/2 justify-center pt-[130px] md:pt-0 px-6 sm:px-8"
        >
          <h1 className="text-5xl sm:text-[50px] md:text-[55px] lg:text-[65px] text-header font-bold mb-4">
            {heroContent.header}
          </h1>
          <p className={"xl:text-3xl text-2xl text-accent mb-4"}>
            "{heroContent.subHeader}"
          </p>

          <p className="font-bold sm:text-lg mb-4">{heroContent.description}</p>
          <div className="flex flex-col md:flex-row md:items-center">
            <div onClick={setTranslate((prev) => !prev)} className="pt-4 ">
              <Link
                to="/kontakt#kontakt-form"
                className="bg-accent hover:bg-gray-200  hover:text-accent duration-500 shadow-lg text-paragraphHell p-3 sm:p-4 px-6 sm:px-10 uppercase"
              >
                {translate ? "Contact me" : "Kontaktiere mich"}
              </Link>
            </div>
            <div className="pt-4 mt-1 md:mt-0 md:ml-2">
              <button
                onClick={toggleTranslate}
                className="bg-accent hover:bg-gray-200 hover:text-accent duration-500 shadow-lg text-paragraphHell p-2.5 sm:p-3.5 px-6 sm:px-10 uppercase"
              >
                {translate ? "German" : "Englisch"}
              </button>
            </div>
          </div>
        </div>
        <div data-aos="fade-in" className=" ">
          <img
            src={kassim}
            className="hidden md:flex  h-[100vh] pt-20"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
