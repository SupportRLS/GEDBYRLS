//boucle d'affichage des cartes dans IntegrationLogiciel.jsx

import React from "react";
import data from "../data/integrationCard.json";
import CardIntegrations from "./CardIntegrations";

function CardsIntegrations() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {data.map((item, index) => (
        <CardIntegrations
          key={index}
          title={item.title}
          logo={item.logo}
          categorie={item.categorie}
          secteur={item.secteur}
          tags={item.tags}
        />
      ))}
    </div>
  );
}

export default CardsIntegrations;
