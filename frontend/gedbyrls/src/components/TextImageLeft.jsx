import React from "react";

function TextImageLeft({ title, text, list, imageSrc, imageAlt, children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center px-8 py-8">
      {/* Image : en dessous sur mobile, à gauche sur desktop */}
      <div className="flex justify-center items-center order-2 lg:order-1">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-w-[600px] max-h-[500px] object-contain rounded-xl"
        />
      </div>

      {/* Texte : au-dessus sur mobile, à droite sur desktop */}
      <div className="flex flex-col justify-start pt-4 order-1 lg:order-2 lg:text-left text-center mt-8 lg:mt-1">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg mt-4 mr-10">{text}</p>

        {list && list.length > 0 && (
          <ul className="list-disc pl-2 lg:text-left text-center text-base leading-7">
            {list.map((item, index) => (
              <li key={index} className="mb-3 text-lg">
                {item}
              </li>
            ))}
          </ul>
        )}

        {children && (
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default TextImageLeft;
