import React from "react";
import Hero from "../komponenten/Hero";
import AboutMe from "../komponenten/AboutMe";
import Navbar from "../komponenten/Navbar";
import Hero2 from "../komponenten/Hero2";

const Home = ({translation, setTranslation}) => {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Hero /> */}
      <Hero2 translation={translation} setTranslation={setTranslation}/>
      {/* <Leistungen/> */}
      <AboutMe translation={translation} setTranslation={setTranslation} />
    </div>
  );
};

export default Home;
