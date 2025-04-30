// backend/server.js
require('dotenv').config();

const express = require('express');
const connectDB = require('./db');
const FormModelHomePage = require('./models/FormModelHomePage');
const app = express();
const port = process.env.PORT || 3000;

// Connexion à la base de données
connectDB();
// Middleware pour gérer/parser les données envoyées par le formulaire 
app.use(express.urlencoded({ extended: true }));
// Middlewares
app.use(express.json());


// Routing 
app.get('/users', (req, res) => {
  res.send('Reçu : ' + JSON.stringify(req.body));
});
app.post('/forms', async (req, res) => {
  try {
    const newForm = new FormModelHomePage(req.body);
    await newForm.save();
    res.status(201).json({ message: 'Formulaire enregistré avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement du formulaire' });
  }
});

app.post('/users', (req, res) => {
  res.send('Reçu : ' + JSON.stringify(req.body));
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});