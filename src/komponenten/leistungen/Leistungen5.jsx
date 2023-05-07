import React, { useContext, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "aos/dist/aos.css";
import "../../styles/leistungen.css";
import useFetch from "../../hooks/useFetch";
import zeit from "../../assets/zeit.webp"

const Leistungen5 = ({translation}) => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  

  const { loading, error, data } = useFetch(
    "https://strapi.canaxa.click/api/leistungen?populate=*&sort=id&locale=" + translation
  );



  const anzahl = [1,2,3]

  return (
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
            {data == null ? "" : data.data[4].attributes.bilder.data.map((element, index) => {
              return (
                <SplideSlide key={index} style={{}}>
                  <div
                    style={{
                      backgroundImage: `url(${"https://strapi.canaxa.click" + element.attributes.url})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    className="h-[385px]"
                  >
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
            {data == null ? "" : data.data[4].attributes.bilder.data.map((element, index ) => {
              return (
                <SplideSlide key={index} style={{}}>
                  <div
                    style={{
                      backgroundImage: `url(${"https://strapi.canaxa.click" + element.attributes.url})`,
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
              <h3 className="text-2xl sm:text-3xl mb-4">{data == null ? "" : data.data[4].attributes.titel}</h3>

              <p>{data == null ? "" :  data.data[4].attributes.beschreibung}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leistungen5;
