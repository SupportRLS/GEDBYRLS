import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import CardsIntegrations from "../components/CardsIntegration";

function IntegrationLogicielsPage() {
  return (
    <div className="IntegrationPage">
      <Header />
      <h1> Integration des logiciel compatible </h1>
      <CardsIntegrations />
      <Footer />
    </div>
  );
}
export default IntegrationLogicielsPage;
