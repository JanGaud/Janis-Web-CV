import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaArrowLeft } from "react-icons/fa";
import ImageModal from "../Tools/ImageModal";

import Notification from "../../assets/projects/chico/Notification.png";
import Stats from "../../assets/projects/chico/Stats.png";
import Swipe from "../../assets/projects/chico/Swipe.png";
import InfosSondage from "../../assets/projects/chico/InfosSondage.png";
import HistoriqueNote from "../../assets/projects/chico/HistoriqueNote.png";
import DtailsReponses from "../../assets/projects/chico/DtailsReponses.png";
import Datatable from "../../assets/projects/chico/Datatable.png";
import ContactRapide from "../../assets/projects/chico/ContactRapide.png";
import Resolution from "../../assets/projects/chico/Resolution.png";

const ChicoDetails = () => {
  const [modalInfo, setModalInfo] = useState({
    isOpen: false,
    src: "",
    alt: "",
  });

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
    <section name="Chico" className="w-full min-h-screen pt-6 text-[#e7e7e7]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div class="py-4 sm:py-8 lg:py-20 pt-10">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div class="flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
              <div className="pb-8">
                <h1 className="text-4xl sm:text-7xl font-bold inline border-b-4 border-[#ff840092]">
                  Franchises Chico
                </h1>
                <p className="py-10">
                  // Durant mon stage, j'ai travaillé sur un projet intitullé
                  VOC (Voice of customer). J'ai appris le C# avec ASP.NET.
                </p>
              </div>
            </div>

            {/* First grid start  */}

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-6 xl:gap-8">
              {/*  image - start  */}
              <div class="group relative flex h-48 md:h-80 items-end overflow-hidden rounded-lg">
                <img
                  src={Notification}
                  loading="lazy"
                  alt="Notification"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  onClick={() =>
                    setModalInfo({
                      isOpen: true,
                      src: Notification,
                      alt: "Notification",
                    })
                  }
                />
              </div>
              {/*  image - end  */}

              {/* Text start */}
              <div class="grid sm:col-span-1 gap-4 md:gap-6 xl:gap-8">
                <p className="text-s">
                  L'objectif principal de ce projet était de simplifier la
                  gestion des données provenant des questionnaires clients et
                  d'améliorer l'interaction avec la clientèle. Grâce à
                  l'interface que j'ai mise en place, les franchisés ont la
                  possibilité d'accéder de manière conviviale aux réponses des
                  questionnaires. Ils peuvent également identifier rapidement
                  les clients exprimant un envie de discuter du service en
                  magasin en recevant des notifications d'alertes.
                  <br />
                  <br />
                  Lorsqu'une alerte est générée, les franchisés peuvent examiner
                  en détail les informations spécifiques au client et prendre
                  les mesures appropriées pour résoudre la demande. Cette
                  approche permet d'augmenter la satisfaction des clients en
                  offrant des réponses plus rapides et mieux adaptées à leurs
                  attentes.
                </p>
              </div>

              {/*  image - start  */}
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg md:col-span-full md:h-80"
              >
                <img
                  src={Stats}
                  loading="lazy"
                  alt="Notification"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  onClick={() =>
                    setModalInfo({
                      isOpen: true,
                      src: Stats,
                      alt: "Stats",
                    })
                  }
                />
              </a>

              {/*  image - end  */}
            </div>

            {/* New grid start 2*/}

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 gap-4">
              <div>
                {/*  image - start  */}
                <a
                  href="#"
                  className="group relative flex h-40 items-end overflow-hidden rounded-lg md:col-span-full md:h-80"
                >
                  <img
                    src={InfosSondage}
                    loading="lazy"
                    alt="Notification"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    onClick={() =>
                      setModalInfo({
                        isOpen: true,
                        src: InfosSondage,
                        alt: "InfosSondage",
                      })
                    }
                  />
                </a>
                {/*  image - end  */}
              </div>
              <div>
                {/*  image - start  */}
                <a
                  href="#"
                  className="group relative flex h-40 items-end overflow-hidden rounded-lg md:col-span-full md:h-80"
                >
                  <img
                    src={ContactRapide}
                    loading="lazy"
                    alt="Notification"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    onClick={() =>
                      setModalInfo({
                        isOpen: true,
                        src: ContactRapide,
                        alt: "ContactRapide",
                      })
                    }
                  />
                </a>
                {/*  image - end  */}
              </div>
              <div>
                {/*  image - start  */}
                <a
                  href="#"
                  className="group relative flex h-40 items-end overflow-hidden rounded-lg md:col-span-full md:h-80"
                >
                  <img
                    src={DtailsReponses}
                    loading="lazy"
                    alt="DtailsReponses"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    onClick={() =>
                      setModalInfo({
                        isOpen: true,
                        src: DtailsReponses,
                        alt: "DtailsReponses",
                      })
                    }
                  />
                </a>
                {/*  image - end  */}
              </div>
            </div>

            {/* New grid start 3 */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 gap-4">
              <div className="md:col-span-2">
                {/* Text */}
                <p>
                  La page de détail des sondages de mon interface est
                  interactive et responsive, avec une approche "mobile first"
                  pour une expérience optimale sur tous les appareils. Cette
                  interface permet aux franchisés de consulter les réponses des
                  clients aux sondages. Si un client souhaite être recontacté,
                  l'interface envoie automatiquement un courriel et une
                  notification au franchisé concerné. Le franchisé peut
                  également accéder aux coordonnées du client.
                  <br />
                  <br />
                  Pour simplifier la communication, j'ai ajouté un bouton pour
                  appeler ou envoyer un courriel au client en un clic. De plus,
                  pour résoudre une alerte, il suffit de prendre des notes et de
                  confirmer la résolution par un balayage.
                </p>
              </div>{" "}
              <div className="md:col-span-1">
                {/* Image */}
                <a
                  href="#"
                  className="group relative flex h-40 items-end overflow-hidden rounded-lg md:h-80"
                >
                  <img
                    src={Swipe}
                    loading="lazy"
                    alt="Swipe"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    onClick={() =>
                      setModalInfo({
                        isOpen: true,
                        src: Swipe,
                        alt: "Swipe",
                      })
                    }
                  />
                </a>
              </div>
            </div>

            {/* grid start 4 */}

            <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-6 xl:gap-8">
              {/*  image - start  */}
              <div class="group relative flex h-48 md:h-80 items-end overflow-hidden rounded-lg">
                <img
                  src={HistoriqueNote}
                  loading="lazy"
                  alt="HistoriqueNote"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  onClick={() =>
                    setModalInfo({
                      isOpen: true,
                      src: HistoriqueNote,
                      alt: "HistoriqueNote",
                    })
                  }
                />
              </div>
              {/*  image - end  */}

              {/* Text start */}
              <div class="grid sm:col-span-1 gap-4 md:gap-6 xl:gap-8">
                <p className="text-s">
                  L'interface permet également de consulter l'historique des
                  résolutions d'alertes. Dans cette section, les utilisateurs
                  ont la possibilité de visualiser les notes de résolution
                  associées à chaque alerte passée. Les alertes dans
                  l'historique sont triées en fonction de la résolution la plus
                  récente, ce qui permet d'avoir une vue claire des actions
                  prises pour chaque alerte précédente.
                  <br /> <br />
                  Contrairement à la page principale des alertes, où les alertes
                  sont classées en fonction du nombre de jours en alerte pour
                  prioriser celles qui nécessitent une réponse immédiate,
                  l'historique met en avant le suivi des actions prises pour
                  résoudre les alertes passées. De plus, pour faciliter la
                  recherche et la gestion, j'ai intégré l'utilisation de{" "}
                  <a
                    className="hover:text-[--amethyst] duration-300"
                    href="https://datatables.net/manual/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DataTables
                  </a>
                  , offrant ainsi la possibilité d'appliquer différents filtres
                  et options pour une meilleure expérience utilisateur.
                </p>
              </div>

              {/*  image - start  */}
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg md:col-span-full md:h-80"
              >
                <img
                  src={Datatable}
                  loading="lazy"
                  alt="Datatable"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  onClick={() =>
                    setModalInfo({
                      isOpen: true,
                      src: Datatable,
                      alt: "Datatable",
                    })
                  }
                />
              </a>

              {/*  image - end  */}
            </div>

            {/* Last grid */}
            <div className="mt-20 grid grid-cols-1 grid-rows-1 gap-4">
              <div>
                {/* Text start */}
                <div class="grid sm:col-span-1">
                  <p className="text-s">
                    Pendant mon stage, j'ai été confronté à de nouvelles
                    technologies que je n'avais jamais rencontrées à l'école.
                    Cependant, une fois que l'on a acquis une solide
                    compréhension des bases de la programmation, du modèle MVC
                    et des requêtes SQL, par exemple, il devient plus aisé de
                    s'adapter. J'ai fait un usage étendu de jQuery et j'ai eu à
                    réaliser des requêtes AJAX pour gérer les interactions
                    dynamiques. En parallèle, j'ai utilisé SQL Server Management
                    Studio (SSMS) comme interface pour la gestion de la base de
                    données. 
                    <br /><br />
                    Mon rôle durant ce stage a également inclus la
                    résolution de plusieurs problèmes. Par exemple, j'ai
                    identifié qu'il était possible pour les clients de soumettre
                    le même formulaire à plusieurs reprises, ce qui aurait pu
                    altérer les données statistiques des sondages. Pour pallier
                    cela, j'ai implémenté des mesures en bloquant l'adresse IP
                    pendant 24 heures après un certain nombre de soumissions et
                    en empêchant toute nouvelle soumission une fois le
                    formulaire envoyé une première fois. Cette initiative visait
                    à garantir l'intégrité des données collectées. 
                    <br /><br />
                    L'expérience
                    m'a permis d'élargir mes compétences et de relever des défis
                    concrets dans le développement d'applications interactives,
                    tout en améliorant la qualité des fonctionnalités et en
                    assurant l'intégrité des données.
                  </p>
                </div>
              </div>
            </div>

            {modalInfo.isOpen && (
              <ImageModal
                src={modalInfo.src}
                alt={modalInfo.alt}
                isModalOpen={modalInfo.isOpen}
                closeModal={() => setModalInfo({ ...modalInfo, isOpen: false })}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChicoDetails;
