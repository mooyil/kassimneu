import React, { useContext } from "react";
import zeit from "../assets/zeit.webp";
import stress from "../assets/stress.webp";
import geld from "../assets/geld.webp";
import krisen from "../assets/krisen.webp";
import gebäude from "../assets/gebäude.webp";
import leadership from "../assets/leadership.webp";
import LeistungenElemente from "./LeistungenElemente";
import LeistungenElemente2 from "./LeistungenElemente2";
import { leistungenContent, leistungenContentEn } from "../content/leistungen";
import kassim from "../assets/kassim3.webp";
import consulting from "../assets/consulting.jpg";
import consulting2 from "../assets/consulting2.jpg";
import { MyContext } from "../context/ContextProvider";
const LeistungenSection = () => {
  const { translate, setTranslate } = useContext(MyContext);

  return (
    <div className=" bg-background2">
      <div
        style={{
          backgroundImage: `url(${consulting2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[80vh] flex pt-[92px] flex-col items-center justify-center relative"
      >
        <div
          data-aos="zoom-in"
          className="bg-black bg-opacity-50 text-center py-8 sm:py-12 px-8 max-w-[90%] sm:max-w-[1100px] mx-auto mb-6 z-20"
        >
          <h2 className="mb-4 font-extrabold text-paragraphHell text-3xl sm:text-5xl ">
          {
            translate
              ? leistungenContentEn.title
              : leistungenContent.title
          }
          </h2>
          <p className="text-paragraphHell sm:text-lg">
          {
            translate
              ? leistungenContentEn.beschreibung
              : leistungenContent.beschreibung
          }
          </p>
        </div>
        <div className="inset-0 absolute h-full bg-black bg-opacity-20 z-10"></div>
      </div>
      <div className="pb-12 max-w-[1800px] p-2 sm:p-6 mx-auto">
        <LeistungenElemente
          bild={zeit}
          content={
            translate
              ? leistungenContentEn.leistungen1.beschreibung
              : leistungenContent.leistungen1.beschreibung
          }
          title={
            translate
              ? leistungenContentEn.leistungen1.title
              : leistungenContent.leistungen1.title
          }
        />
        <LeistungenElemente2
          bild={stress}
          content={
            translate
              ? leistungenContentEn.leistungen2.beschreibung
              : leistungenContent.leistungen2.beschreibung
          }
          title={
            translate
              ? leistungenContentEn.leistungen2.title
              : leistungenContent.leistungen2.title
          }
        />
        <LeistungenElemente
          bild={geld}
          content={
            translate
              ? leistungenContentEn.leistungen3.beschreibung
              : leistungenContent.leistungen3.beschreibung
          }
          title={
            translate
              ? leistungenContentEn.leistungen3.title
              : leistungenContent.leistungen3.title
          }
        />
        <LeistungenElemente2
          bild={krisen}
          content={
            translate
              ? leistungenContentEn.leistungen4.beschreibung
              : leistungenContent.leistungen4.beschreibung
          }
          title={
            translate
              ? leistungenContentEn.leistungen4.title
              : leistungenContent.leistungen4.title
          }
        />
        <LeistungenElemente
          bild={gebäude}
          content={
            translate
              ? leistungenContentEn.leistungen5.beschreibung
              : leistungenContent.leistungen5.beschreibung
          }
          title={
            translate
              ? leistungenContentEn.leistungen5.title
              : leistungenContent.leistungen5.title
          }
        />
        <LeistungenElemente2
          bild={leadership}
          content={
            translate
              ? leistungenContentEn.leistungen6.beschreibung
              : leistungenContent.leistungen6.beschreibung
          }
          title={
            translate
              ? leistungenContentEn.leistungen6.title
              : leistungenContent.leistungen6.title
          }
        />
      </div>
      <div></div>
    </div>
  );
};

export default LeistungenSection;
