import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "aos/dist/aos.css";

const LeistungenElemente2 = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const anzahl = [1, 2, 3, 4, 5];

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
              pauseOnFocus: true,
              pagination: false,
              speed: 800,
            }}
          >
            {anzahl.map((index, element) => {
              return (
                <SplideSlide key={index} style={{}}>
                  <div
                    style={{
                      backgroundImage: `url(${props.bild})`,
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
          className="w-full sm:h-[900px] py-2 sm:p-2 md:w-[50%] text-center text-paragraphHell"
        >
          <div className="h-full bg-accent py-12 sm:py-0 flex flex-col items-center justify-center">
            <div className="max-w-[80%] ">
              {props.title}

              {props.content}
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="hidden md:block w-full py-2 sm:p-2 md:w-[50%] h-[400px] md:h-[900px]"
        >
          <button className="splide__arrow splide__arrow--prev bg-white ml-1.5"></button>
          <button className="splide__arrow splide__arrow--next mr-2 bg-white"></button>
          <Splide
            options={{
              arrows: true,
              perMove: 1,
              pauseOnHover: true,
              pauseOnFocus: true,
              pagination: false,
              speed: 800,
            }}
          >
            {anzahl.map((index, element) => {
              return (
                <SplideSlide key={index} style={{}}>
                  <div
                    style={{
                      backgroundImage: `url(${props.bild})`,
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
      </div>
    </div>
  );
};

export default LeistungenElemente2;

// <div>
//   <div className="flex flex-col sm:flex-row justify-center ">
//     <div className="w-full sm:w-[50%] h-[900px] py-2 sm:p-2">
//       <img src={props.bild} alt="" className="w-full h-full" />
//     </div>
//     <div className="w-full h-[900px] py-2 sm:p-2 sm:w-[50%] text-center text-white">
//       <div className="h-full bg-gray-800 flex flex-col items-center justify-center">
//         <div className="max-w-[85%] ">
//           {props.title}
//           {props.content}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
