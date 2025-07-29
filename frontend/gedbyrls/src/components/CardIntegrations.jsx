import React from "react";

function CardIntegrations({ title, logo, categorie, secteur, tags }) {
  return (
    <div className="bg-[#f7e2d2] rounded-3xl p-1 w-[400px] shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="bg-[#f4f4f4] rounded-3xl p-4 w-[390px] h-[220px] relative flex flex-col justify-between">
        {/* Logo dans un conteneur fixe centré */}
        <div className="h-[60px] w-full flex items-center justify-start mb-2">
          <img
            src={logo}
            alt={`logo du logiciel ${title}`}
            className="w-[100px] h-auto object-contain"
          />
        </div>

        {/* Tag */}
        <p className="!text-[12px] text-center mt-2 min-h-[60px]">{tags}</p>

        {/* Badges en bas à gauche */}
        <div className="flex flex-wrap gap-2 absolute bottom-4 left-4">
          <span className="text-xs bg-red-300 text-blue-950 px-3 py-1 rounded-full h-6 flex items-center">
            {categorie}
          </span>
          <span className="text-xs bg-red-300 text-blue-950 px-3 py-1 rounded-full h-6 flex items-center">
            {secteur}
          </span>
        </div>
      </div>

      {/* Titre du logiciel */}
      <h3 className="mt-2 text-lg font-semibold text-center !text-[18px] text-gray-600 opacity-80">
        {title}
      </h3>
    </div>
  );
}

export default CardIntegrations;
