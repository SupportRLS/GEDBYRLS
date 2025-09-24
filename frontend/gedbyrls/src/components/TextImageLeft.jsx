import React from "react";

function TextImageLeft({
  data,
  title,
  text,
  list,
  imageSrc,
  imageAlt,
  children,
}) {
  // Priorité à data si fourni (Strapi)
  const content = data || { title, text, list, imageSrc, imageAlt, children };
  const {
    title: t,
    text: txt,
    list: lst,
    imageSrc: img,
    imageAlt: alt,
    children: ch,
  } = content;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center px-8 py-8">
      <div className="flex justify-center items-center order-2 lg:order-1">
        <img
          src={img}
          alt={alt}
          className="w-full max-w-[600px] max-h-[500px] object-contain rounded-xl"
        />
      </div>

      <div className="flex flex-col justify-start pt-4 order-1 lg:order-2 lg:text-left text-center mt-8 lg:mt-1">
        <h2 className="text-2xl font-bold">{t}</h2>
        <p className="text-lg mt-4 mr-10">{txt}</p>

        {lst && lst.length > 0 && (
          <ul className="pl-2 lg:text-start text-center text-base leading-7">
            {lst.map((item, index) => (
              <li key={index} className="mb-3 text-lg">
                {item}
              </li>
            ))}
          </ul>
        )}

        {ch && (
          <div className="flex flex-wrap justify-center gap-4 mt-4">{ch}</div>
        )}
      </div>
    </div>
  );
}

export default TextImageLeft;
