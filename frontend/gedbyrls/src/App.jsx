import React from "react";
import { Route, Routes } from "react-router-dom";
import SecteurPage from "./pages/secteurPage.jsx";
import HomePage from "./pages/homePage.jsx";
import FormationPage from "./pages/formationPage.jsx";
import ContactPage from "./pages/contactPage.jsx";
import JeDebuteDansLaGed from "./pages/jeDebuteDansLaGed.jsx";
import Faq from "./pages/Faq.jsx";
import GaleriePhoto from "./pages/Galerie.jsx";
import PaperToDigital from "./pages/PaperToDigital.jsx";
import ElectronicSign from "./pages/ElectronicSign.jsx";
import IntegrationLogicielsPage from "./pages/IntegrationLogiciels.jsx";
import ArticlesGed from "./pages/ArticlesGed.jsx";
import ArticleDetail from "./pages/ArticleDetail.jsx";
import SecurityPage from "./pages/SecurityPage.jsx";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/formation" element={<FormationPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Dynamic route for secteur pages */}
      <Route path="/secteur/:slug" element={<SecteurPage />} />
      {/* <Route path="//solution/Articles" element={< />} /> */}
      {/* <Route path="/solution/integration-des-logiciels-compatibles" element={< />} /> */}
      <Route
        path="/solution/je-debute-dans-la-ged"
        element={<JeDebuteDansLaGed />}
      />
      <Route path="/solution/faq" element={<Faq />} />
      <Route path="/solution/galerie" element={<GaleriePhoto />} />
      <Route
        path="/solution/la-signature-electronique"
        element={<ElectronicSign />}
      />
      <Route
        path="/solution/De-larchivage-papier-à-larchivage-numerique"
        element={<PaperToDigital />}
      />
      <Route
        path="/solution/integration-des-logiciels-compatibles"
        element={<IntegrationLogicielsPage />}
      />
      <Route
        path="solution/securisation-rgpd-tracabilite"
        element={<SecurityPage />}
      />
      <Route path="solution/Articles" element={<ArticlesGed />} />
      <Route path="solution/articles/:slug" element={<ArticleDetail />} />
    </Routes>
  );
}

export default App;
