// backend/server.js
require('dotenv').config();

const express = require('express');
const fetch = require('node-fetch'); // ➕ ajouté pour Formspree
const connectDB = require('./db');
const FormModelHomePage = require('./models/FormModelHomePage');
const app = express();
const port = process.env.PORT || 3000;

// Connexion à la base de données
connectDB();

// Middleware pour gérer les données envoyées par le formulaire
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing 
app.get('/users', (req, res) => {
  res.send('Reçu : ' + JSON.stringify(req.body));
});

app.post('/forms', async (req, res) => {
  try {
    // 1. Sauvegarde dans MongoDB
    const newForm = new FormModelHomePage(req.body);
    await newForm.save();



    // Réponse au client
    res.status(201).json({ message: 'Formulaire enregistré et email envoyé' });
  } catch (error) {
    console.error(' Erreur dans /forms :', error);
    res.status(500).json({ message: 'Erreur lors du traitement du formulaire' });
  }
});

app.post('/users', (req, res) => {
  res.send('Reçu : ' + JSON.stringify(req.body));
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});