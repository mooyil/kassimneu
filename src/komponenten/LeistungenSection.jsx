import React, { useContext, useEffect } from "react";
import zeit from "../assets/zeit.webp";
import stress from "../assets/stress.webp";
import geld from "../assets/geld.webp";
import krisen from "../assets/krisen.webp";
import gebäude from "../assets/gebäude.webp";
import leadership from "../assets/leadership.webp";
import LeistungenElemente from "./LeistungenElemente";
import LeistungenElemente2 from "./LeistungenElemente2";
import { leistungenContent, leistungenContentEn } from "../content/leistungen";
import { MyContext } from "../context/ContextProvider";
import kassim5 from "../assets/kassim5.jpg";
import useFetch from "../hooks/useFetch";

const LeistungenSection = ({ translation }) => {
  const { translate, setTranslate } = useContext(MyContext);

  const { loading, error, data } = useFetch(
    "https://strapi.canaxa.click/api/leistungen?locale=" + translation
  );

  if (data == null) {
    console.log("null");
  } else {
    console.log(data.data[2].attributes.beschreibung);
  }

  return (
    <div className=" bg-background2">
      <div
        style={{
          backgroundImage: `url(${kassim5})`,
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
            {translation === "en" ? leistungenContentEn.title : leistungenContent.title}
          </h2>
          <p className="text-paragraphHell sm:text-lg">
            {translation === "en"
              ? leistungenContentEn.beschreibung
              : leistungenContent.beschreibung}
          </p>
        </div>
        <div className="inset-0 absolute h-full bg-black bg-opacity-20 z-10"></div>
      </div>
      <div className="pb-12 max-w-[1800px] p-2 sm:p-6 mx-auto">
        <LeistungenElemente
          bild={zeit}
          content={data == null ? "" : data.data[1].attributes.beschreibung}
          title={data == null ? "" : data.data[1].attributes.titel}
        />
        <LeistungenElemente2
          bild={stress}
          content={data == null ? "" : data.data[2].attributes.beschreibung}
          title={data == null ? "" : data.data[2].attributes.titel}
        />
        <LeistungenElemente
          bild={geld}
          content={data == null ? "" : data.data[3].attributes.beschreibung}
          title={data == null ? "" : data.data[3].attributes.titel}
        />
        <LeistungenElemente2
          bild={krisen}
          content={
            data == null ? "" : data.data[0].attributes.beschreibung
          }
          title={
            data == null ? "" : data.data[0].attributes.titel
          }
        />
        <LeistungenElemente
          bild={gebäude}
          content={
            data == null ? "" : data.data[4].attributes.beschreibung
          }
          title={
            data == null ? "" : data.data[4].attributes.titel
          }
        />
        <LeistungenElemente2
          bild={leadership}
          content={
            data == null ? "" : data.data[5].attributes.beschreibung
          }
          title={
            data == null ? "" : data.data[5].attributes.titel
          }
        />
      </div>
      <div></div>
    </div>
  );
};

export default LeistungenSection;
