import React from "react";
import Hero from "../komponenten/Hero";
import AboutMe from "../komponenten/AboutMe";
import Navbar from "../komponenten/Navbar";
import Hero2 from "../komponenten/Hero2";

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Hero /> */}
      <Hero2/>
      {/* <Leistungen/> */}
      <AboutMe />
    </div>
  );
};

export default Home;
