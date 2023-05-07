import React, { useState, useRef, useEffect, useContext } from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import nba from "../assets/nba.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MyContext } from "../context/ContextProvider";
import useFetch from "../hooks/useFetch";

const SocialMedia2 = () => {
  const { translate, setTranslate } = useContext(MyContext);

  const { loading, error, data } = useFetch(
    "https://strapi.canaxa.click/api/instagram-posts?populate=*"
  );

  if (data == null) {
    console.log("null");
  } else {
    console.log(data.data);
  }

  const post = [1, 2, 3];

  const [width, setWidth] = useState(0);
  const carusel = useRef();

  useEffect(() => {
    setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth);
  }, []);

  return (
    <section
      ref={carusel}
      //   style={{ backgroundImage: `url(${bild})` }}
      className="p-6 py-12 bg-accent border-b-2  border-b-background2 overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className=" text-paragraphHell text-3xl sm:text-4xl ">
          {translate ? "My Social Media" : "Mein Social Media"}
        </h2>
        <div className="flex justify-center">
          <hr className="w-[100px] h-[2px] border-none font-extrabold bg-background1" />
          <hr className="w-[150px] h-[2px] border-none font-extrabold bg-background1" />
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="mb-4">
            <h3 className="text-2xl text-paragraphHell text-center">
              Instagram
            </h3>
          </div>
        </div>

        <div className="  ">
          <div className="mb-12">
            <Splide
              options={{
                arrows: false,
                pagination: false,
                autoplay: true,
                type: "loop",
                rewind: true,
                perMove: 1,
                speed: 50000,
                pauseOnHover: false,
                breakpoints: {
                  760: {
                    perPage: 1,
                    gap: "5em",
                  },
                  1060: {
                    perPage: 2,
                  },
                  5800: {
                    perPage: 3,
                  },
                },
              }}
            >
              {data == null
                ? ""
                : data.data.map((element, index) => {
                    return (
                      <SplideSlide
                        key={index}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div className="">
                          <a href={element.attributes.link}>
                            asda
                            <img
                              src={
                                "https://strapi.canaxa.click" +
                                element.attributes.post_bild.data.attributes.url
                              }
                              alt="nba"
                              className="rounded-lg "
                            />
                          </a>
                        </div>
                      </SplideSlide>
                    );
                  })}
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia2;
