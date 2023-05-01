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

  return (
    <nav
      ref={navbarRef}
      style={{ zIndex: 70 }}
      className={` w-full fixed duration-500 bg-navbar shadow-md text-paragraphHell flex justify-between items-center p-4 py-6 font-poppins ${
        isScrolled ? "translate-y-[0px]" : ""
      } ${scroll > 70 ? "translate-y-[-200px]" : ""}`}
    >
      <div style={{ zIndex: 70 }} className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl font-bold">Grow with Kassim</span>
          <span className="text-xs">Evolve your life to high achievements</span>
        </div>
      </div>
      <div className="md:flex hidden ">
        <ul className="flex items-center text-lg">
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
      </div>

      <div
        style={{ zIndex: 70 }}
        onClick={handleToggle}
        className={`md:hidden  py-0 px-2.5 rounded-lg sm:right-10 right-2 cursor-pointer absolute`}
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
