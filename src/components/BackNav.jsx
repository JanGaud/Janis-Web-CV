import React from "react";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";


const BackNav = () => {
  const [nav, setNav] = useState(false);
  const [navbarColor, setNavbarColor] = useState("transparent");

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPos = window.scrollY;
      let opacity = scrollPos / 700; // Adjust 700 to control the fade speed
      opacity = opacity > 1 ? 1 : opacity; // Ensure opacity stays between 0 and 1
      setNavbarColor(`rgba(15, 0, 29, ${opacity})`); // #0f001d in rgba
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="z-10 fixed w-full h-[80px] flex justify-around items-center px-4"
      style={{ backgroundColor: navbarColor }}
    >
      <a
        href="/"
        className="p-4 z-index: 20 flex gap-6 items-center text-md font-semibold  outline-none md:px-8 md:py-3 text-[#e7e7e7] md:text-base hover:text-[--amethyst] duration-300"
      >
        <FaArrowLeft className="text-[30px]" />
        <small className="text-[20px]">Retour</small>
      </a>
    </div>
  );
};

export default BackNav;
