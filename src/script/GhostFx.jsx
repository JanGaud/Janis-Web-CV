import React, { useEffect } from "react";

const GhostEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".ghostFx").forEach((container) => {
        // Skip this section if it's already been activated.
        if (container.dataset.activated) return;

        const { top, bottom } = container.getBoundingClientRect();

        // Check if the container is at least halfway in the viewport
        if (
          top + container.offsetHeight / 2 < window.innerHeight &&
          bottom - container.offsetHeight / 2 > 0
        ) {
          // Mark this section as activated.
          container.dataset.activated = "true";

          Array.from(container.children).forEach((child) => {
            child.style.opacity = "1";
            child.style.transform = "translateX(0%)"; // Place them in their original position
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
