import React from "react";
import ButtonComponentsRed from "../components/ButtonComponentsRed";

function PageRessources() {
  return (
    <div className="PageRessource">
      <h1> La page ressources </h1>
      <ButtonComponentsRed
        text="Recevoir un cas client"
        href="/ressources/form-cas-client"
      />
    </div>
  );
}
export default PageRessources;
