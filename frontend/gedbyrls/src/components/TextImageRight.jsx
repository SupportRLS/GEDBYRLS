import React from "react";

function TextImageRight({ title, text, list, imageSrc, imageAlt, children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start px-4 lg:px-16 py-6 max-w-[1640px] mb-4 mx-auto">
      <div className="flex flex-col justify-start order-1 lg:text-left text-center">
        <h2 className="text-2xl font-bold flex justify-center lg:justify-center pt-8 pb-3.5">
          {title}
        </h2>
        <p className="mt-2 text-lg">{text}</p>

        {list && list.length > 0 && (
          <ul className="flex flex-col justify-start text-lg leading-8 mt-6 text-list">
            {list.map((item, index) => (
              <li
                key={index}
                className="list-disc text-base lg:text-left text-center lg:pl-6"
              >
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

      <div className="flex justify-center items-center order-2 mt-5">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-w-[600px] max-h-[500px] object-contain rounded-xl"
        />
      </div>
    </div>
  );
}

export default TextImageRight;
