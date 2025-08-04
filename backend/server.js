// backend/server.js
require("dotenv").config();

const express = require("express");
const pool = require("./db");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Test GET
app.get("/users", (req, res) => {
  res.send("Reçu : " + JSON.stringify(req.body));
});

// POST formulaire vers PostgreSQL
app.post("/forms", async (req, res) => {
  try {
    const { name, surname, societe, phone, email, message } = req.body;

    const result = await pool.query(
      `INSERT INTO forms (name, surname, societe, phone, email, message)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, surname, societe, phone, email, message]
    );

    res
      .status(201)
      .json({ message: "Formulaire enregistré", data: result.rows[0] });
  } catch (error) {
    console.error("Erreur dans /forms :", error);
    res
      .status(500)
      .json({ message: "Erreur lors du traitement du formulaire" });
  }
});

// GET pour voir tous les formulaires
app.get("/forms", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM forms ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Erreur dans GET /forms :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.listen(port, () => {
  console.log(` Serveur lancé sur http://localhost:${port}`);
});
