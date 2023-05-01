import { Call, Email, House, Room } from "@mui/icons-material";
import React, { useContext } from "react";
import "aos/dist/aos.css";
import { MyContext } from "../context/ContextProvider";


const KontaktForm = ({translation, setTranslation}) => {

  const { translate, setTranslate } = useContext(MyContext);


  return (
    <section id="kontakt-form" className="bg-background2 p-6 py-12 md:px-20 w-full">
      <div className="flex flex-col justify-around sm:flex-row w-full">
        <div data-aos="fade-up" className="mb-6 sm:mb-0">
          <div>
            <h2 className="text-2xl sm:text-3xl uppercase text-header">{translation === "en" ? "Contact" : "Kontakt"}</h2>
            <div className="flex mb-2">
            <hr className="w-[100px] h-[2px] border-none font-extrabold bg-accent" />
            <hr className="w-[150px] h-[2px] border-none font-extrabold bg-background1" />
          </div>
            <p className="mb-4 text-accent">{translation === "en" ? "Call me or write to me" : "Ruf an oder schreib mir"}</p>
          </div>
          <div className="text-accent">
            <div className="mb-1">
              <House />
              <span className="ml-2">Grow-With-Kassim</span>
            </div>
            <div className="mb-1">
              <Room />
              <span className="ml-2">Lehmannstr. 23, 34213 Hamburg</span>
            </div>
            <div className="mb-1">
              <Call />
              <span className="ml-2">+49 212 340 989 43</span>
            </div>
            <div className="mb-1">
              <Email />
              <span className="ml-2">hussain.kassim@web.de</span>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="sm:w-[60%] md:w-[60%] max-w-[800px] ">
          <form className=" w-[100%] ">
            <div className="flex flex-wrap sm:flex-nowrap mb-2">
              <div className="w-full md:w-1/2 sm:mr-1 mb-2 md:mb-0">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  required
                  className="border border-gray-400 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-textwhite"
                />
              </div>
              <div className="w-full md:w-1/2 sm:ml-1">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Nachname"
                  required
                  className="border border-gray-400 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-textwhite"
                />
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap mb-2">
              <div className="w-full md:w-1/2 sm:mr-1 mb-2 md:mb-0">
                <input
                  type="text"
                  id="name"
                  placeholder="Telefon"
                  required
                  className="border border-gray-400 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-textwhite"
                />
              </div>
              <div className="w-full md:w-1/2 sm:ml-1">
                <input
                  type="tel"
                  id="phone"
                  placeholder="E-Mail"
                  required
                  className="border border-gray-400 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-textwhite"
                />
              </div>
            </div>
            <div className="mb-3">
              <textarea
                id="message"
                placeholder="Nachricht"
                required
                className="border border-gray-400 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-textwhite"
                rows="6"
              />
            </div>

            <div className="flex justify-start">
              <button className="h-[42px] w-[100%] px-6 uppercase bg-accent hover:bg-gray-200 hover:text-accent duration-500 text-paragraphHell flex items-center">
                <span className="  mx-auto ">{translation === "en" ? "Send" : "Abschicken"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default KontaktForm;
