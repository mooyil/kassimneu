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

const Hero2 = ({ translation, setTranslation }) => {
  const { translate, setTranslate } = useContext(MyContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [toggleInfo, setToggleInfo] = React.useState(true);

  function toggle() {
    setToggleInfo((prevInfo) => !prevInfo);
  }

  const toggleTranslate = (e) => {
    setTranslation(e.target.value);
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
            <div className="pt-4">
              <div className=" bg-accent text-center items-center flex justify-center  h-10 w-44  hover:bg-gray-200 hover:text-accent duration-500 shadow-lg  text-paragraphHell  uppercase">
                <Link to="/kontakt#kontakt-form">
                  <p>
                    {translation === "en" ? "Contact me" : "Kontaktiere mich"}
                  </p>
                </Link>
              </div>
            </div>
            <div className="pt-1 md:pt-4 mt-1 md:mt-0 md:ml-2">
              <select
                onClick={toggleTranslate}
                type="option"
                className="bg-accent duration-500 shadow-lg text-paragraphHell h-10 w-44 text-center uppercase"
              >
                <option id="sprache" name="sprache" value="de">
                  Deutsch
                </option>
                <option value="en">Englisch</option>
              </select>
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
