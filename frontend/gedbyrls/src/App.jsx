import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SecteurPage from './pages/secteurPage.jsx';
import HomePage from './pages/homePage.jsx';
import FormationPage from './pages/formationPage.jsx';
import ContactPage from './pages/contactPage.jsx';
import JeDebuteDansLaGed from './pages/jeDebuteDansLaGed.jsx';
import Faq from './pages/Faq.jsx';
import GaleriePhoto from './pages/Galerie.jsx';
import PageSignatureElectronique from './pages/SignatureElectronique.jsx';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/formation" element={<FormationPage />} />
      <Route path="/contact" element={<ContactPage />} />
      
      
      {/* Dynamic route for secteur pages */}
      <Route path="/secteur/:slug" element={<SecteurPage />} />

      <Route path='/solution/je-debute-dans-la-ged' element={<JeDebuteDansLaGed />} />
      <Route path="/solution/faq" element={<Faq />} />
      <Route path='/solution/galerie' element={<GaleriePhoto />} />
      <Route path='/solution/la-signature-electronique' element={<PageSignatureElectronique/>} />
    </Routes>
  );
}

export default App;
