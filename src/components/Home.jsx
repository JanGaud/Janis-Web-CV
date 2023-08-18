import React from 'react';
import { Link } from "react-scroll";


const Home = () => {
  return (
    <section name="home" className="w-full h-screen bg-[--russian-violet]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[--orange-peel]">Bonjour, mon nom est</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#e7e7e7]">
          Janis Gaudreault
        </h1>
        <h2 className="text-3xl sm:text-6xl text-[#ff840092]">
          Je suis une développeuse Web Full Stack.
        </h2>
        <p className="text-[#e7e7e7] py-4 max-w-[800px]">
          "Bonjour, je suis Janis Gaudreault, développeuse full stack
          spécialisée dans le web. Mon expertise englobe le développement
          complet d'applications web, du front-end au back-end. Passionnée par
          le mariage entre le code et le design, j'apprécie particulièrement
          créer des interfaces esthétiques et conviviales.
        </p>
        <div>
          <button className="text-gray-300 border-2 p-3 my-2 hover:border-[--amethyst] duration-300">
            <Link
              activeClass="active"
              to="work"
              smooth={true}
              duration={500}
            >
              Voir mes projets
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home
