import React, { useContext, useEffect } from "react";
import "../styles/aboutMe2.css";
import { aboutMe2Content, aboutMe2ContentEn } from "../content/aboutMe2.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
import kassim5 from "../assets/kassim5.jpg";
import useFetch from "../hooks/useFetch";

import { MyContext } from "../context/ContextProvider";

const AboutMe2 = ({ translation, setTranslation }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { translate, setTranslate } = useContext(MyContext);

  const { loading, error, data } = useFetch(
    "https://strapi.canaxa.click/api/timelines?locale=" +
      translation +
      "&sort=jahr"
  );

  if (data == null) {
    console.log("null");
  } else {
    console.log(data.data[0].attributes.id);
  }

  return (
    <div className="">
      <div className="">
        <div
          style={{
            backgroundImage: `url(${kassim5})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "40%",
          }}
          className="h-[100vh] flex flex-col  pt-[92px] items-center justify-center relative"
        >
          <div
            data-aos="zoom-in"
            className="bg-black bg-opacity-50  text-center py-8 sm:py-12 px-8 max-w-[90%] sm:max-w-[1100px] mx-auto mb-6 z-20"
          >
            <h2 className="mb-4 font-extrabold text-white text-3xl sm:text-5xl ">
              {translation === "en" ? aboutMe2ContentEn.title : aboutMe2Content.title}
            </h2>
            <p className="text-white sm:text-lg">
              {translation === "en"
                ? aboutMe2ContentEn.titleBeschreibung
                : aboutMe2Content.titleBeschreibung}
            </p>
          </div>
          <div className="inset-0 absolute h-full bg-black bg-opacity-20 z-10"></div>
        </div>
        <div
          //  style={{
          //   backgroundImage: `url(${background2})`,
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
          // }}
          className="bg-[#efefef]"
        >
          <ul class="timeline py-12 ">
            {data === null
              ? console.log("null")
              : data.data.map((element, index) => {
                  return (
                    <li key={index}>
                      <div
                        className={`${
                          index % 2 === 0 ? "direction-r" : "direction-l"
                        }`}
                      >
                        <div data-aos="zoom-in-down" className="flag-wrapper">
                          <span className="hexa"></span>
                          <span className="flag">
                            {element.attributes.titel}.
                          </span>
                          <span className="time-wrapper">
                            <span className="time">
                              {element.attributes.jahr}
                            </span>
                          </span>
                        </div>
                        <div
                          data-aos="zoom-in-down"
                          className="desc rounded-lg sm:text-lg"
                        >
                          {element.attributes.beschreibung}
                        </div>
                      </div>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe2;
