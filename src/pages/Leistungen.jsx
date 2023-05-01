import React from "react";
import Navbar2 from "../komponenten/Navbar2";
import LeistungenSection from "../komponenten/LeistungenSection";

const Leistungen = ({translation, setTranslation}) => {
  return (
    <div>
      {/* <Navbar2 /> */}
      <LeistungenSection translation={translation} setTranslation={setTranslation}/>
    </div>
  );
};

export default Leistungen;
