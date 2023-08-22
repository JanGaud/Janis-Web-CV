import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/JGLogo.png";
import CV from "../assets/cv/CV-Janis-Gaudreault.pdf";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import TypingAnimation from "../script/TypeAnimation";

const elements = [
  {
    toRotate: '["Développeuse Web", "Programmeuse Full Stack"]',
    period: "4500",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [navbarColor, setNavbarColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      let scrollPos = window.scrollY;
      let opacity = scrollPos / 700; // Adjust 600 to control the fade speed
      opacity = opacity > 1 ? 1 : opacity; // Ensure opacity stays between 0 and 1
      setNavbarColor(`rgba(15, 0, 29, ${opacity})`); // #0f001d in rgba
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="z-10 fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 navbar transition duration-500"
      style={{ backgroundColor: navbarColor }}
    >
      <div className="flex items-center">
        <img src={Logo} alt="JG Logo" className="w-16 mr-5" />
        <TypingAnimation elements={elements} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link activeClass="active" to="home" smooth={true} duration={500}>
            Acceuil
          </Link>
        </li>
          <li>
            <Link activeClass="active" to="about" smooth={true} duration={500}>
              À propos
            </Link>
          </li>
        <li>
          <Link activeClass="active" to="skills" smooth={true} duration={500}>
            Compétences
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="work" smooth={true} duration={500}>
            Projets
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10 text-3xl">
        {!nav ? (
          <FaBars className="hover:text-[--amethyst] duration-300" />
        ) : (
          <FaTimes className="hover:text-[--amethyst] duration-300" />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "z-100 absolute top-0 left-0 w-full h-screen bg-[--russian-violet] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          >
            Acceuil
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="about"
            smooth={true}
            duration={500}
          >
            À propos
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="skills"
            smooth={true}
            duration={500}
          >
            Compétences
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="work"
            smooth={true}
            duration={500}
          >
            Projets
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff9e00]">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="https://www.linkedin.com/in/janis-gaudreault-227594209/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#24292e]">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="https://github.com/JanGaud"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#d44638]">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="mailto:JanisGaudreault.JG@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Courriel <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
