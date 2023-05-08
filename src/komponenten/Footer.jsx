import { Call, Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import React, { useContext } from "react";
import logo from "../assets/logor.png";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { MyContext } from "../context/ContextProvider";
import { navbarContent, navbarContentEn } from "../content/navbar";

const Footer = ({ translation, setTranslation }) => {
  const { translate, setTranslate } = useContext(MyContext);

  return (
    <footer className="bg-navbar text-paragraphHell p-6 py-20">
      <div
        data-aos="fade-in"
        className="flex flex-col sm:flex-row justify-evenly"
      >
        <div className="flex flex-col mb-6 sm:mb-0 justify-center">
          
          <span className="text-xl font-bold">Grow with Kassim</span>
          <span className="text-xs">Evolve your life to high achievements</span>
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
