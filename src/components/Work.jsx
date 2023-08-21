import React from "react";
import { Link } from "react-router-dom";

import VinStock from "../assets/projects/vinstock/VinStock.png";
import Chico from "../assets/projects/chico/Chico.jpg";
import Maisonneuve from "../assets/projects/maisonneuve/Maisonneuve.png";
import Unavailable from "../assets/unavailable.png";

const Work = () => {
  return (
    <section name="work" className="ghostFx w-full min-h-screen text-[#e7e7e7]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl sm:text-7xl font-bold inline border-b-4 border-[#ff840092]">
            Projets réalisés
          </h1>
          <p className="py-10">
            // Voici quelques projets sur lesquels j'ai travaillé.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${VinStock})` }}
            className="z-10 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-center text-white tracking-wider">
                  Laravel et Php
                </span>
                <small>Pour téléphone mobile</small>
              </div>
              <div className="pt-8 text-center">
                <a href="https://www.vinstock.ca/login" target="_blank">
                  <button className="text-gray-300 border-2 p-2 hover:border-[--amethyst] duration-300">
                    Visiter le site!
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${Chico})` }}
            className="z-10 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-center text-white tracking-wider">
                  C# avec ASP.NET
                </span>
                <small>Interface admin</small>
              </div>
              <div className="pt-8 text-center">
                <Link to="/Chico">
                  <button className="text-gray-300 border-2 p-2 hover:border-[--amethyst] duration-300">
                    Voir plus!
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${Maisonneuve})` }}
            className="z-10 group container rounded-md flex justify-center items-center mx-auto content-div p-2"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-center text-white tracking-wider">
                  Laravel et Php
                </span>
                <small>Travail pratique de réseau sociale d'école</small>
              </div>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-gray-300 border-2 p-2 hover:border-[--amethyst] duration-300">
                    Voir plus!
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${Unavailable})` }}
            className="z-10 group container rounded-md flex justify-center items-center mx-auto content-div p-2"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Bientôt disponible
              </span>
              <div className="pt-8 text-center">
                {/* <a href="#">
                  <button className="text-gray-300 border-2 p-2 hover:border-[--amethyst] duration-300">
                    Voir plus!
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${Unavailable})` }}
            className="z-10 group container rounded-md flex justify-center items-center mx-auto content-div p-2"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Bientôt disponible
              </span>
              <div className="pt-8 text-center">
                {/* <a href="#">
                  <button className="text-gray-300 border-2 p-2 hover:border-[--amethyst] duration-300">
                    Voir plus!
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${Unavailable})` }}
            className="z-10 group container rounded-md flex justify-center items-center mx-auto content-div p-2"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Bientôt disponible
              </span>
              <div className="pt-8 text-center">
                {/* <a href="#">
                  <button className="text-gray-300 border-2 p-2 hover:border-[--amethyst] duration-300">
                    Voir plus!
                  </button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
