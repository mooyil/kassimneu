import {
  CheckBoxOutlined,
  Dvr,
  Groups,
  Person,
  QuestionAnswer,
} from "@mui/icons-material";
import React, { useContext } from "react";
import kassim2 from "../assets/kassim2.webp";
import kassim3 from "../assets/kassim3.webp";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { aboutMeContent, aboutMeContentEn } from "../content/aboutMe";
import { MyContext } from "../context/ContextProvider";

const AboutMe = () => {
  const {translate, setTranslate} = useContext(MyContext);

  console.log(translate)

  return (
    <div id="überuns" className=" ">
      <div className="">
        <div className="flex bg-background1 flex-col sm:flex-row">
          <div className="sm:hidden">
            <img
              src={kassim2}
              alt="bild"
              className="max-h-[400px] sm:max-h-[500px] w-full"
            />
          </div>
          <div data-aos="fade-down" className="flex-col flex-1">
            <div className=" p-12 px-6 sm:px-12 pb-6">
              <h2 className={` text-3xl sm:text-4xl text-header`}>
                {translate ? aboutMeContentEn.first.header : aboutMeContent.first.header}
              </h2>
              <div className="flex">
                <hr className="w-[100px] border-none h-[2px] font-extrabold bg-header" />
                <hr className="w-[150px] border-none h-[2px] font-extrabold bg-background3" />
              </div>
            </div>
            <div className={`p-12 pt-0 px-6 sm:px-12 pb-6 `}>
              <p className="text-paragraph ">
              {translate ? aboutMeContentEn.first.description1 : aboutMeContent.first.description1}
              </p>
              <p className="mt-4 text-paragraph">
              {translate ? aboutMeContentEn.first.description2 : aboutMeContent.first.description2}

              </p>
              <p className="text-paragraph mt-6">
                "{aboutMeContent.first.description3}"
              </p>
            </div>
            <div data-aos="zoom-in" className="mt-4 px-6 sm:px-12 mb-12">
              <Link
                to="/kontakt#kontakt-form"
                className="bg-accent hover:bg-background2 hover:text-accent duration-500 shadow-lg text-paragraphHell p-4 px-10 uppercase"
              >
                Kontaktiere mich
              </Link>
            </div>
          </div>
          <div
            className="flex-1 "
            style={{
              backgroundImage: `url(${kassim2})`,
              backgroundSize: "cover",
              backgroundPositionY: "15%",
              backgroundPositionX: "45%",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
            }}
          ></div>
        </div>
        <div className="flex bg-accent flex-col sm:flex-row">
          <div
            className="flex-1"
            style={{
              backgroundImage: `url(${kassim3})`,
              backgroundSize: "cover",
              backgroundPositionY: "25%",
              backgroundPositionX: "25%",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
            }}
          >
            {/* <img src={laptop1} alt="laptop1" /> */}
          </div>
          <div className="sm:hidden ">
            <img
              src={kassim3}
              alt="team"
              className="max-h-[500px] sm:max-h-[500px] w-full"
            />
          </div>
          <div className="flex-col border-b-2  flex-1">
            <div
              data-aos="fade-down"
              className="text-3xl p-12 px-6 sm:px-12 text-center pb-6"
            >
              <h2 className=" text-3xl text-paragraphHell sm:text-4xl">
                Meine Leistungen
              </h2>
              <div className="flex justify-center">
                <hr className="w-[100px] border-none h-[2px] font-extrabold bg-gray-500" />
                <hr className="w-[150px] border-none h-[2px] font-extrabold bg-paragraphHell" />
              </div>
            </div>
            <div className="p-12 pt-0 px-6 sm:px-12 pb-6">
              <div className="flex flex-col text-accent justify-center items-center ">
                <div
                  data-aos="flip-left"
                  className="sm:mx-4 mb-4 flex flex-col text-center bg-background2 shadow-lg p-6 py-12 max-w-[450px] "
                >
                  <Dvr sx={{ fontSize: 55 }} className="mx-auto mb-6" />
                  <span className="mb-4 text-2xl">
                    Seminare für Unternehmen & Hochschulen
                  </span>
                  <p className="text-lg">
                    Gastvorträge, Seminare, Workshops, Consulting Services
                  </p>
                </div>
                <div
                  data-aos="flip-right"
                  className="sm:mx-4 mb-4  flex flex-col text-center bg-background2 shadow-lg p-6 py-12 max-w-[450px]"
                >
                  <Person sx={{ fontSize: 55 }} className="mx-auto mb-6" />
                  <span className="mb-4 text-2xl">1:1 Coaching & Beratung</span>
                  <p className="text-lg">
                    Coaching, Consulting, Entscheidungsfindung, Problemlösung
                  </p>
                </div>
                <div
                  data-aos="flip-left"
                  className="sm:mx-4 flex flex-col text-center bg-background2 shadow-lg p-6 py-12 max-w-[450px]"
                >
                  <Groups sx={{ fontSize: 55 }} className="mx-auto mb-6" />
                  <span className="mb-4 text-2xl">Gruppen-Seminare</span>
                  <p className="text-lg">
                    {" "}
                    Seminare, Workshops, F & Q, Unterstützung, Motivation{" "}
                  </p>
                </div>
                <div data-aos="zoom-in" className="mt-14 mb-8">
                  <Link
                    to="/kontakt#kontakt-form"
                    className="bg-background1 hover:bg-background2 hover:text-accent duration-500 shadow-lg text-paragraph p-4 px-10 uppercase"
                  >
                    Kontaktiere mich
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
