import React, { useEffect } from "react";
import "../styles/aboutMe2.css";
import { aboutMe2Content } from "../content/aboutMe2.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
import consulting2 from "../assets/consulting2.jpg";
import background1 from "../assets/background1.jpg"
import background2 from "../assets/background2.jpg"
import background3 from "../assets/background3.jpg"
import background4 from "../assets/background4.jpg"


const AboutMe2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="">
      <div className="">
        <div
          style={{
            backgroundImage: `url(${consulting2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="h-[80vh] flex flex-col pt-[92px] items-center justify-center relative"
        >
          <div data-aos="zoom-in" className="bg-black bg-opacity-50  text-center py-8 sm:py-12 px-8 max-w-[90%] sm:max-w-[1100px] mx-auto mb-6 z-20">
            <h2 className="mb-4 font-extrabold text-white text-3xl sm:text-5xl ">
              {aboutMe2Content.title}
            </h2>
            <p className="text-white sm:text-lg">
              {aboutMe2Content.titleBeschreibung}
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
        className="bg-[#efefef]">
          <ul class="timeline py-12 ">
            {aboutMe2Content.timelineElements.map((element, index) => {
              return (
                <li key={index}>
                  <div className={`${element.richtung}`}>
                    <div data-aos="zoom-in-down" className="flag-wrapper">
                      <span className="hexa"></span>
                      <span className="flag">{element.überschrift}.</span>
                      <span className="time-wrapper">
                        <span className="time">{element.jahr}</span>
                      </span>
                    </div>
                    <div data-aos="zoom-in-down" className="desc rounded-lg sm:text-lg">
                      {element.beschreibung}
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
