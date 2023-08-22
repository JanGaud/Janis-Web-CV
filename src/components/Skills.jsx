import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import PHP from "../assets/php.png";
import JAVASCRIPT from "../assets/javascript.png";
import CSHARP from "../assets/c-sharp.png";
import LARAVEL from "../assets/laravel.png";
import REACT from "../assets/react.png";
import MYSQL from "../assets/mysql.png";


const Skills = () => {
  return (
    <section
      name="skills"
      className="ghostFx w-full min-h-screen text-[#e7e7e7]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h1 className="tracking-wider text-4xl sm:text-7xl font-bold inline border-b-4 border-[#ff840092]">
            Compétences
          </h1>
          <p className="py-10">
            // Voici quelques technologies avec lesquelles je travaille.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-6 text-center py-8">
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p>CSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={PHP} alt="PHP icon" />
            <p>PHP</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSHARP} alt="C# icon" />
            <p>C#</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JAVASCRIPT}
              alt="JAVASCRIPT icon"
            />
            <p>JAVASCRIPT</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MYSQL} alt="MYSQL icon" />
            <p>MYSQL</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={LARAVEL} alt="LARAVEL icon" />
            <p>LARAVEL</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={REACT} alt="HTML icon" />
            <p>REACT.JS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
