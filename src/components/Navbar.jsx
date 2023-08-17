import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/JGLogo.png";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[--russian-violet] text-gray-300">
      <div>
        <img src={Logo} alt="JG Logo" style={{ width: 70 }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>Acceuil</li>
        <li>Expériences</li>
        <li>Compétences</li>
        <li>Travail</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10 text-3xl">
        {!nav ? <FaBars /> : <FaTimes />}
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
        <li className="py-6 text-4xl">Expériences</li>
        <li className="py-6 text-4xl">Compétences</li>
        <li className="py-6 text-4xl">Travail</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
