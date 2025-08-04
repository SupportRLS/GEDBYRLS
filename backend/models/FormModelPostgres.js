// backend/models/FormModelPostgres.js
const pool = require("../db");

const insertForm = async ({
  name,
  surname,
  societe,
  phone,
  email,
  message,
}) => {
  const result = await pool.query(
    `INSERT INTO forms (name, surname, societe, phone, email, message)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *`,
    [name, surname, societe, phone, email, message]
  );
  return result.rows[0];
};

const getAllForms = async () => {
  const result = await pool.query(
    `SELECT * FROM forms ORDER BY created_at DESC`
  );
  return result.rows;
};

module.exports = { insertForm, getAllForms };
