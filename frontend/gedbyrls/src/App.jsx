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
import ErrorPage from "./pages/ErrorPage.jsx";
//ressources
import PageCasClient from "./pages/PageCasClient.jsx";
import FormCasClient from "./pages/FormCasClient.jsx";
import PageLivreBlanc from "./pages/PageLivreBlanc.jsx";
import FormLivreBlanc from "./pages/FormLivreBlanc.jsx";

// mentions légales | cgu
import MentionsLegalesPage from "./pages/MentionsLegales.jsx";
import CGUPage from "./pages/cgu.jsx";

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
      {/* <Route path="/solution/Articles" element={< />} /> */}
      {/* <Route path="/solution/integration-des-logiciels-compatibles" element={< />} /> */}
      <Route
        path="/solution/je-debute-dans-la-ged"
        element={<JeDebuteDansLaGed />}
      />
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

      {/* Ressources  */}
      <Route path="/ressources/faq" element={<Faq />} />
      <Route path="/ressources/cas-client" element={<PageCasClient />} />
      <Route path="/ressources/form-cas-client" element={<FormCasClient />} />
      <Route path="/ressources/livre-blanc" element={<PageLivreBlanc />} />
      <Route path="/ressources/form-livre-blanc" element={<FormLivreBlanc />} />

      {/* Catch routes */}
      <Route path="*" element={<ErrorPage />} />

      {/* Mentions légales */}
      <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
      <Route path="/cgu" element={<CGUPage />} />
    </Routes>
  );
}

export default App;
