import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SecteurPage from './pages/secteurPage.jsx';
import HomePage from './pages/homePage.jsx';
import FormationPage from './pages/formationPage.jsx';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/formation" element={<FormationPage />} />
      <Route path="/secteur/:slug" element={<SecteurPage />} />
    </Routes>
  );
}

export default App;
