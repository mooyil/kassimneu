import React, { useContext, useEffect } from "react";
import KontaktForm from "../komponenten/KontaktForm";
import Navbar2 from "../komponenten/Navbar2";
import consulting2 from "../assets/consulting2.jpg";
import Bewertungen from "../komponenten/Bewertungen";
import "aos/dist/aos.css";
import AOS from "aos";
import { kontaktContent, kontaktContentEn } from "../content/kontakt";
import { MyContext } from "../context/ContextProvider";

const KontaktPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { translate, setTranslate } = useContext(MyContext);

  return (
    <div>
      {/* <Navbar2 /> */}
      <div
        style={{
          backgroundImage: `url(${consulting2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[80vh] pt-[92px] flex flex-col items-center justify-center relative"
      >
        <div
          data-aos="zoom-in"
          className="bg-black bg-opacity-50 text-center py-8 sm:py-12 px-8 max-w-[90%] sm:max-w-[1100px] mx-auto mb-6 z-20"
        >
          <h2 className="mb-4 font-extrabold text-white text-3xl sm:text-5xl ">
            {translate ? kontaktContentEn.title : kontaktContent.title}
          </h2>
          <p className="text-white sm:text-lg">
            {translate
              ? kontaktContentEn.titleBeschreibung
              : kontaktContent.titleBeschreibung}
          </p>
        </div>
        <div className="inset-0 absolute h-full bg-black bg-opacity-20 z-10"></div>
      </div>
      <div className="">
        <KontaktForm />
        <Bewertungen />
      </div>
    </div>
  );
};

export default KontaktPage;
