import { Call, Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import React from "react";
import logo from "../assets/logor.png"
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navbar text-paragraphHell p-6 py-20">
      <div data-aos="fade-in" className="flex flex-col sm:flex-row justify-evenly">
        <div className="flex flex-col mb-6 sm:mb-0 justify-center">
          <span className="text-xl font-bold">Grow with Kassim</span>
          <span className="text-xs">Evolve your life to high achievements</span>
        </div>
        <div className="mb-6 sm:mb-0">
          <p className="text-lg font-bold mb-2">Informationen</p>
          <div className="flex flex-col">
            <Link className="hover:underline" to="/">Home</Link>
            <Link className="hover:underline" to="/über-mich">Über mich</Link>
            <Link className="hover:underline" to="/leistungen">Leistungen</Link>
            <Link className="hover:underline" to="/kontakt">Kontakt</Link>
          </div>
        </div>
        <div className="mb-6 sm:mb-0">
          <p className="text-lg font-bold mb-2">Kontakt</p>
          <p>Telefon: 0140-9394509</p>
          <p>E-Mail: hussain.kassim@web.de</p>
          <p>Erreichbarkeit:</p>
          <p>Mo - Fr: 09:00 Uhr - 18:00 Uhr</p>
        </div>
        <div>
          <p className="text-lg font-bold ">Erreichbar unter</p>
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
