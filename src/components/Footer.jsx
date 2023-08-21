import React from "react";
import Logo from "../assets/FullLogo.png";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import CV from "../assets/cv/CV-Janis-Gaudreault.pdf";

const Footer = () => {
  return (
    <footer className="rounded-lg shadow mt-10 w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="flex items-center sm:mb-0 sm:justify-center">
            <img src={Logo} alt="JG Logo" style={{ width: 200 }} />
          </a>
          <ul className="flex items-center mt-6 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="hover:scale-110 duration-500">
              <a
                className="flex justify-between items-center w-full text-[#ff9e00]"
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <span className="mr-2">CV</span>{" "}
                <BsFillPersonLinesFill size={20} />
              </a>
            </li>
            <li className="hover:scale-110 duration-500">
              <a
                className="flex justify-between items-center w-full text-[#0A66C2]"
                href="https://www.linkedin.com/in/janis-gaudreault-227594209/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">LinkedIn</span> <FaLinkedin size={20} />
              </a>
            </li>
            <li className="hover:scale-110 duration-500">
              <a
                className="flex justify-between items-center w-full text-gray-50"
                href="https://github.com/JanGaud"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">GitHub</span> <FaGithub size={20} />
              </a>
            </li>
            <li className="hover:scale-110 duration-500">
              <a
                className="flex justify-between items-center w-full text-[#d44638]"
                href="https://github.com/JanGaud"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">Courriel</span>{" "}
                <HiOutlineMail size={20} />
              </a>
            </li>
          </ul>
        </div>
        <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 mb-8" />
        <span className="block text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <span>Janis Gaudreault</span>. Tout droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
