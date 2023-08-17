import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/JGLogo.png";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <section className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[--russian-violet] text-gray-300">
      <div>
        <img src={Logo} alt="JG Logo" style={{ width: 70 }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>Acceuil</li>
        <li>À propos</li>
        <li>Compétences</li>
        <li>Projets</li>
        <li>Contact</li>
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
            : "absolute top-0 left-0 w-full h-screen bg-[--russian-violet] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Acceuil</li>
        <li className="py-6 text-4xl">À propos</li>
        <li className="py-6 text-4xl">Compétences</li>
        <li className="py-6 text-4xl">Projets</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff9e00]">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#24292e]">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#d44638]">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="#"
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
