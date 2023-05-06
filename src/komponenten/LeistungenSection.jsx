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
import useFetch, { useFetch1 } from "../hooks/useFetch";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const LeistungenSection = ({ translation }) => {
  const { translate, setTranslate } = useContext(MyContext);

  const { loading, error, data } = useFetch(
    "https://strapi.canaxa.click/api/leistungen?locale=" + translation
  );

  const { loading1, error1, data1 } = useFetch1(
    "https://strapi.canaxa.click/api/zeit-management-bilder?populate=*"
  );

  if (data1 == null) {
    console.log("null");
  } else {
    console.log(data1.data[0].attributes.bild.data[0].attributes.url);
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
            {translation === "en"
              ? leistungenContentEn.title
              : leistungenContent.title}
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
        <div>
          <div className="flex flex-col md:flex-row justify-center ">
            <div
              data-aos="zoom-in"
              className="block md:hidden w-full py-2 sm:p-2 md:w-[50%] h-[400px] md:h-[900px]"
            >
              <button className="splide__arrow splide__arrow--prev bg-white "></button>
              <button className="splide__arrow splide__arrow--next  bg-white"></button>
              <Splide
                options={{
                  arrows: true,
                  perMove: 1,
                  pauseOnHover: true,
                  pagination: false,
                  speed: 800,
                }}
              >
                {data1 == null ? console.log("") : data1.data.map((index, element) => {
                  return (
                    <SplideSlide key={index} style={{}}>
                      <div
                        style={{
                          backgroundImage: `url(${"https://strapi.canaxa.click" + data1.data[0].attributes.bild.data[0].attributes.url})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                        className="h-[385px]"
                      >
                        {/* <img src={props.bild} alt="" className="w-full h-full"/> */}
                      </div>
                    </SplideSlide>
                  );
                })}
              </Splide>
            </div>
            <div
              data-aos="zoom-in"
              className="hidden md:block  w-full py-2 sm:p-2 md:w-[50%] h-[400px] sm:h-[900px]"
            >
              <button className="splide__arrow splide__arrow--prev bg-white ml-1.5"></button>
              <button className="splide__arrow splide__arrow--next mr-2 bg-white"></button>
              <Splide
                options={{
                  // arrows: true,
                  perMove: 1,
                  pauseOnHover: true,
                  pauseOnFocus: true,
                  pagination: false,
                  speed: 800,
                }}
              >
                {data1 == null ? console.log("") : data1.data.map((index, element) => {
                  return (
                    <SplideSlide key={index} style={{}}>
                      <div
                        style={{
                          backgroundImage: `url(${"https://strapi.canaxa.click" + data1.data[1].attributes.bild.data[0].attributes.url})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                        className="h-[400px] sm:h-[885px]"
                      ></div>
                    </SplideSlide>
                  );
                })}
              </Splide>
            </div>
            <div
              data-aos="zoom-in"
              className="w-full sm:h-[900px] py-2 sm:p-2 md:w-[50%] text-center text-paragraphHell"
            >
              <div className="h-full bg-accent py-12 sm:py-0 flex flex-col items-center justify-center">
                <div className="max-w-[80%] ">
                  <h3 className="text-2xl sm:text-3xl mb-4">{data == null ? "" : data.data[2].attributes.titel}</h3>

                  <p>{data == null ? "" : data.data[1].attributes.beschreibung}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <LeistungenElemente
          bild={zeit}
          content={data == null ? "" : data.data[1].attributes.beschreibung}
          title={data == null ? "" : data.data[1].attributes.titel}
        /> */}
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
          content={data == null ? "" : data.data[0].attributes.beschreibung}
          title={data == null ? "" : data.data[0].attributes.titel}
        />
        <LeistungenElemente
          bild={gebäude}
          content={data == null ? "" : data.data[4].attributes.beschreibung}
          title={data == null ? "" : data.data[4].attributes.titel}
        />
        <LeistungenElemente2
          bild={leadership}
          content={data == null ? "" : data.data[5].attributes.beschreibung}
          title={data == null ? "" : data.data[5].attributes.titel}
        />
      </div>
      <div></div>
    </div>
  );
};

export default LeistungenSection;
