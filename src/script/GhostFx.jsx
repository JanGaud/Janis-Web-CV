import React, { useEffect } from "react";

const GhostEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".ghostFx").forEach((container) => {
        const { top, bottom } = container.getBoundingClientRect();

        // Check if the container is at least halfway in the viewport
        if (
          top + container.offsetHeight / 2 < window.innerHeight &&
          bottom - container.offsetHeight / 2 > 0
        ) {
          Array.from(container.children).forEach((child) => {
            child.style.opacity = "1";
            child.style.transform = "translateY(0%)";
          });
        } else {
          Array.from(container.children).forEach((child) => {
            child.style.opacity = "0";
            child.style.transform = "translateY(-100%)";
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger immediately on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default GhostEffect;
