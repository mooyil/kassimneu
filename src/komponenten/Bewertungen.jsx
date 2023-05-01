import React, { useContext } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "aos/dist/aos.css";
import "@splidejs/react-splide/css";
import "../styles/bewertungen.css";
import stress from "../assets/stress.webp";
import useFetch from "../hooks/useFetch";
import { MyContext } from "../context/ContextProvider";

const Bewertungen = ({translation, setTranslation}) => {
  const { translate, setTranslate } = useContext(MyContext);

  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/bewertungens?populate=bild"
  );

  // if (data == null) {
  //   console.log("null");
  // } else {
  //   console.log(data.data[0].attributes.bild.data.attributes.url);
  // }

  return (
    <div className="bg-background1">
      <div className="p-6 py-12">
        <div data-aos="fade-down" className="pb-6">
          <h2 className={` text-3xl sm:text-4xl text-header`}>
            {translation === "en" ? "My Reviews" : "Meine Bewertungen"}
          </h2>
          <div className="flex mb-2">
            <hr className="w-[100px] border-none h-[2px] font-extrabold bg-black" />
            <hr className="w-[150px] border-none h-[2px] font-extrabold bg-gray-300" />
          </div>
          <p className="text-accent">
            {" "}
            {translation === "en"
              ? "This is what my customers say about me."
              : "Das sagen meine Kunden über mich"}
          </p>
        </div>
        <div data-aos="fade-down">
          <Splide
            options={{
              arrows: true,
              perMove: 1,
              pagination: false,
              autoplay: true,
              // type: "loop",
              speed: 800,
              breakpoints: {
                760: {
                  perPage: 1,
                  gap: "5em",
                  arrows: false,
                },
                960: {
                  perPage: 2,
                },
                5800: {
                  perPage: 3,
                },
              },
            }}
          >
            {data == null
              ? console.log("null")
              : data.data.map((bewertung, index) => {
                  return (
                    <SplideSlide
                      key={index}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <figure class="snip1157">
                        <blockquote>
                          {bewertung.attributes.content}
                          <div class="arrow"></div>
                        </blockquote>
                        <img
                          src={
                            "http://localhost:1337" +
                            bewertung.attributes.bild.data.attributes.url
                          }
                          alt="bild"
                        />
                        <div class="author">
                          <p className="text-paragraph">
                            {bewertung.attributes.name}
                          </p>
                        </div>
                      </figure>
                    </SplideSlide>
                  );
                })}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Bewertungen;
