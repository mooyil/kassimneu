import { useState, useEffect, useRef, useContext } from "react";
import "../styles/navIcon.css";
import logo from "../assets/logor.png";
import { Link } from "react-router-dom";
import { MyContext } from "../context/ContextProvider";
import { navbarContent, navbarContentEn } from "../content/navbar";

const Navbar2 = ({ translation, setTranslation }) => {
  const [scroll, setScroll] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { translate, setTranslate } = useContext(MyContext);

  const navbarRef = useRef(null);

  useEffect(() => {
    const height = navbarRef.current.clientHeight;
    console.log(height);
  }, []);

  const handleToggle = () => {
    setTimeout(() => {
      setHidden((prev) => !prev);
    }, 500);
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;
      setPrevScrollPos(currentScrollPos);
      setIsScrolled(isScrollingUp && currentScrollPos > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const vhToPixels = (vh) => {
    return Math.round((window.innerHeight * vh) / 100);
  };

  const toggleTranslate = (e) => {
    // if(translation === "de") {
    //   setTranslation("en")
    // } else {
    //   setTranslation("de")
    // }

    setTranslation(e.target.value);
  };

  return (
    <nav
      ref={navbarRef}
      style={{ zIndex: 70 }}
      className={` w-full fixed duration-500 bg-navbar shadow-md text-paragraphHell flex justify-between items-center p-4 py-6 font-poppins ${
        isScrolled ? "translate-y-[0px]" : ""
      } ${scroll > 70 ? "translate-y-[-200px]" : ""}`}
    >
       <div className='flex flex-row items-center '>
            {/* Pfeil */}
            <div className='  absolute items-center pfeil pfeilani'>  
                <svg  fill="#ffffff" height="70px" width="70px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 1792 1792" xmlSpace="preserve">
                <path d="M1792,897l-431,198.5l84.5-157.5H462.9l-99.3,123.6H0l133.2-165L0,730.4h363.6l99.3,125.6h982.3l-84.5-159.5L1792,897z"/>
              </svg>
            </div>
            {/* //Logo mit Text */}
           <div className='ml-5 Ziel'>
              <svg width="293" height="139" viewBox="0 0 293 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="62" r="32" stroke="#efefef" strokeWidth="4"/>
                <circle cx="60.5" cy="62.5" r="19.5" stroke="#efefef" strokeWidth="4"/>
                <circle cx="60.5" cy="62.5" r="8" stroke="#efefef" strokeWidth="3"/>
                <circle cx="60.5" cy="62.5" r="2.5" fill="#efefef"/>
              </svg>
           </div>
        <div className="hidden sm:flex ml-32 flex-col items-center justify-center">
          <span className="text-xl font-bold">Grow With Kassim</span>
          <span className="text-xs">Evolve your life to high achievements</span>
        </div>
          </div>
       
      
      <div className="md:flex  hidden ">
        <ul className="flex  items-center text-lg">
          {navbarContent.links.map((lin, index) => {
            return (
              <li
                key={index}
                className="cursor-pointer hover:text-primary duration-100 pr-4  "
              >
                <Link to={lin.to} className="">
                  {translation === "en"
                    ? navbarContentEn.links[index].link
                    : navbarContent.links[index].link}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mr-2 ">
          {/* <button
                onClick={toggleTranslate}
                type="option"
                className="bg-accent duration-500 shadow-lg text-paragraphHell h-10 w-44 text-center uppercase"
              >
              {translation === "en" ? "Deutsch" : "Englisch"}
              </button> */}
          <select
            onChange={toggleTranslate}
            className="bg-accent text-paragraphHell underline duration-500 shadow-lg h-10  text-center uppercase"
          >
            <option value="de">De</option>
            <option value="en">En</option>
          </select>
        </div>
      </div>

      <div
        style={{ zIndex: 70 }}
        onClick={handleToggle}
        className={`md:hidden  py-0 px-2.5 rounded-lg  right-4 cursor-pointer absolute`}
      >
        <div className={`nav-icon2 ${toggle ? "nav-icon2 open" : "nav-icon2"}`}>
          <span className="bg-paragraphHell"></span>
          <span className="bg-paragraphHell"></span>
          <span className="bg-paragraphHell"></span>
          <span className="bg-paragraphHell"></span>
          <span className="bg-paragraphHell"></span>
          <span className="bg-paragraphHell"></span>
        </div>
      </div>
      <div className="mr-16 md:hidden">
        <select
          onChange={toggleTranslate}
          className=" bg-accent duration-500 shadow-lg h-10  text-center uppercase"
        >
          <option value="de">De</option>
          <option value="en">En</option>
        </select>
      </div>

      <div
        style={{ zIndex: 30 }}
        className={`md:hidden ${
          toggle ? "menu-fadeIn" : `menu-fadeOut  ${hidden ? "hidden" : ""} `
        }  w-[100vw] h-[100vh] flex flex-col justify-center top-0 right-0 text-paragraphHell  bg-navbar fixed `}
      >
        <ul className="flex flex-col items-center text-lg">
          {navbarContent.links.map((lin, index) => {
            return (
              <li
                onClick={handleToggle}
                key={index}
                className="cursor-pointer hover:text-primary duration-100 pt-4  "
              >
                <Link to={lin.to} className="">
                  {translation === "en"
                    ? navbarContentEn.links[index].link
                    : navbarContent.links[index].link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
