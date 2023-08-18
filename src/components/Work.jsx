import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";


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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="z-10 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS application
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-gray-300 border-2 p-3 hover:border-[--amethyst] duration-300">
                    Voir plus!
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="z-10 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS application
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-gray-300 border-2 p-3 hover:border-[--amethyst] duration-300">
                    Voir plus!
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="z-10 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS application
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-gray-300 border-2 p-3 hover:border-[--amethyst] duration-300">
                    Voir plus!
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="z-10 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS application
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-gray-300 border-2 p-3 hover:border-[--amethyst] duration-300">
                    Voir plus!
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="z-10 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS application
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-gray-300 border-2 p-3 hover:border-[--amethyst] duration-300">
                    Voir plus!
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="z-10 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS application
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-gray-300 border-2 p-3 hover:border-[--amethyst] duration-300">
                    Voir plus!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
