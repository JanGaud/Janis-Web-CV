import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="ghostFx w-full h-screen text-[#e7e7e7]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <h1 className="text-4xl sm:text-7xl font-bold inline border-b-4 border-[#ff840092]">
              À propos
            </h1>
          </div>
        </div>
        <div></div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl">
            <p>
              Salut! Bienvenue sur mon CV Web, prenez le temps que vous voulez
              pour visiter.
            </p>
          </div>
          <div>
            <p>
              Créative et dynamique, avec 10 ans d'expérience en restauration et
              une formation récente en programmation, je suis prête pour de
              nouveaux défis. Ma capacité à résoudre des problèmes complexes,
              mon esprit d'équipe et mes compétences stratégiques enrichiront
              votre entreprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
