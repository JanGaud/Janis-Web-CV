import React from "react";


const Contact = () => {
  return (
    <section
      name="contact"
      className="ghostFx w-full h-screen flex justify-center p-4"
    >
      <form
        action="https://getform.io/f/322d68c2-8c0c-41c4-abcb-aa3a3db05b72"
        method="POST"
        className="flex flex-col max-w-[600px] w-full text-[--russian-violet]"
      >
        <div className="pb-8 text-[#e7e7e7]">
          <h1 className="text-4xl sm:text-7xl font-bold inline border-b-4 border-[#ff840092]">
            Contactez-moi
          </h1>
          <p className="py-10 mb-[-30px]">
            // N'hésitez pas à utiliser le formulaire ci-dessous ou à me
            contacter directement par e-mail à JanisGaudreault.JG@gmail.com.
          </p>
        </div>
        <input
          className="p-2 bg-[#dec8f1]"
          type="text"
          placeholder="Votre nom"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#dec8f1]"
          type="email"
          placeholder="Courriel"
          name="email"
        />
        <textarea
          className="p-2 bg-[#dec8f1]"
          name="message"
          rows="10"
        ></textarea>
        <div>
          <button
            type="submit"
            className="text-gray-300 border-2 px-3 py-3 my-2 mx-auto flex items-center hover:border-[--amethyst] duration-300"
          >
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
