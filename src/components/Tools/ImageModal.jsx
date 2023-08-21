import React from "react";

const ImageModal = ({ src, alt, isModalOpen, closeModal }) => {
  return (
    <>
      {isModalOpen && (
        <div className="z-50 fixed max-h-screen inset-0 flex items-center justify-center bg-[#000000c0]">
          <div className="p-6 rounded shadow-lg max-w-lg mx-auto relative">
            <button
              className="absolute top-0 right-0 text-[#e7e7e7] hover:text-purple-500 duration-300 text-[30px]"
              onClick={closeModal}
            >
              X
            </button>
            <img className="max-h-[500px]" src={src} alt={alt} />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
