import React from "react";
import zeit from "../assets/zeit.webp";
import stress from "../assets/stress.webp";
import geld from "../assets/geld.webp";
import krisen from "../assets/krisen.webp";
import gebäude from "../assets/gebäude.webp";
import leadership from "../assets/leadership.webp";
import LeistungenElemente from "./LeistungenElemente";
import LeistungenElemente2 from "./LeistungenElemente2";
import { leistungenContent } from "../content/leistungen";
import kassim from "../assets/kassim3.webp"
import consulting from "../assets/consulting.jpg"
import consulting2 from "../assets/consulting2.jpg"
const LeistungenSection = () => {
  return (
    <div className=" bg-background2">
        <div 
               style={{
                backgroundImage: `url(${consulting2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}        
        className="h-[80vh] flex pt-[92px] flex-col items-center justify-center relative">
          <div data-aos="zoom-in" className="bg-black bg-opacity-50 text-center py-8 sm:py-12 px-8 max-w-[90%] sm:max-w-[1100px] mx-auto mb-6 z-20">
            <h2 className="mb-4 font-extrabold text-paragraphHell text-3xl sm:text-5xl ">
              Consulting & Coaching Services
            </h2>
            <p className="text-paragraphHell sm:text-lg">
              Beim Consulting gebe ich Dir Werkzeuge, Methoden und
              Vorgehensweisen an die Hand, die du für dich anwenden kannst wie
              es dir passt. Gerne können wir die Umsetzung auch gemeinsam in
              einem Coaching realisieren.
            </p>
          </div>
          <div className="inset-0 absolute h-full bg-black bg-opacity-20 z-10"></div>
        </div>
      <div className="pb-12 max-w-[1800px] p-2 sm:p-6 mx-auto">
        <LeistungenElemente
          bild={zeit}
          content={leistungenContent.leistungen1.beschreibung}
          title={leistungenContent.leistungen1.title}
        />
        <LeistungenElemente2
          bild={stress}
          content={leistungenContent.leistungen2.beschreibung}
          title={leistungenContent.leistungen2.title}
        />
        <LeistungenElemente
          bild={geld}
          content={leistungenContent.leistungen3.beschreibung}
          title={leistungenContent.leistungen3.title}
        />
        <LeistungenElemente2
          bild={krisen}
          content={leistungenContent.leistungen4.beschreibung}
          title={leistungenContent.leistungen4.title}
        />
        <LeistungenElemente
          bild={gebäude}
          content={leistungenContent.leistungen5.beschreibung}
          title={leistungenContent.leistungen5.title}
        />
        <LeistungenElemente2
          bild={leadership}
          content={leistungenContent.leistungen6.beschreibung}
          title={leistungenContent.leistungen6.title}
        />
      </div> 
      <div>
      </div>
    </div>
  );
};

export default LeistungenSection;
