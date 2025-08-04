const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

pool
  .connect()
  .then(() => console.log("✅ Connexion PostgreSQL réussie"))
  .catch((err) => {
    console.error("❌ Erreur de connexion PostgreSQL :", err);
    process.exit(1);
  });

module.exports = pool;
