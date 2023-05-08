import { Call, Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import React, { useContext } from "react";
import logo from "../assets/logor.png";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { MyContext } from "../context/ContextProvider";
import { navbarContent, navbarContentEn } from "../content/navbar";
import "../styles/footer.css"

const Footer = ({ translation, setTranslation }) => {
  const { translate, setTranslate } = useContext(MyContext);

  return (
    <footer className="bg-navbar text-paragraphHell p-6 py-20">
      <div
        data-aos="fade-in"
        className="flex flex-col mt-6 sm:mt-0 sm:flex-row justify-evenly"
      >
        <div className="flex flex-col  relative mb-6 sm:mb-0 justify-center">
          <div className="flex  flex-col ">
            {/* Pfeil */}
            <div className="sm:ml-3 absolute items-center pfeil-footer pfeilani">
              <svg
                fill="#ffffff"
                height="70px"
                width="70px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1792 1792"
                xmlSpace="preserve"
              >
                <path d="M1792,897l-431,198.5l84.5-157.5H462.9l-99.3,123.6H0l133.2-165L0,730.4h363.6l99.3,125.6h982.3l-84.5-159.5L1792,897z" />
              </svg>
            </div>
            {/* //Logo mit Text */}
            <div className="ml-5 sm:ml-8 ziel-footer">
              <svg
                width="293"
                height="139"
                viewBox="0 0 293 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="60"
                  cy="62"
                  r="32"
                  stroke="#efefef"
                  strokeWidth="4"
                />
                <circle
                  cx="60.5"
                  cy="62.5"
                  r="19.5"
                  stroke="#efefef"
                  strokeWidth="4"
                />
                <circle
                  cx="60.5"
                  cy="62.5"
                  r="8"
                  stroke="#efefef"
                  strokeWidth="3"
                />
                <circle cx="60.5" cy="62.5" r="2.5" fill="#efefef" />
              </svg>
            </div>
            <span className="text-xl sm:text-center mt-6 font-bold">Grow with Kassim</span>
            <span className="text-xs ">
              Evolve your life to high achievements
            </span>
          </div>
        </div>
        <div className="mb-6 sm:mb-0">
          <p className="text-lg font-bold mb-2">
            {translate ? "Information" : "Informationen"}
          </p>
          <div className="flex flex-col">
            {navbarContent.links.map((link, index) => {
              return (
                <Link className="hover:underline" to={link.to}>
                  {translation === "en"
                    ? navbarContentEn.links[index].link
                    : navbarContent.links[index].link}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mb-6 sm:mb-0">
          <p className="text-lg font-bold mb-2">
            {translation === "en" ? "Contact" : "Kontakt"}
          </p>
          <p>{translate ? "Telephone:" : "Telefon"} 0140-9394509</p>
          <p>E-Mail: hussain.kassim@web.de</p>
          <p>{translate ? "Availability" : "Erreichbarkeit"}:</p>
          <p>Mo - Fr: 09:00 Uhr - 18:00 Uhr</p>
        </div>
        <div>
          <p className="text-lg font-bold ">
            {translation === "en" ? "Reach me at" : "Erreichbar unter"}
          </p>
          <div className="flex flex-row">
            <div className="p-1">
              <Instagram />
            </div>
            <div className="p-1">
              <Facebook />
            </div>
            <div className="p-1">
              <WhatsApp />
            </div>
            <div className="p-1">
              <Call />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
