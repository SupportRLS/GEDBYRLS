const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connexion MongoDB réussie');
    return conn.connection.useDb('GEDBYRLSBDD'); // Forcer l’utilisation de la bonne DB
  } catch (err) {
    console.error('❌ Erreur de connexion MongoDB :', err);
    process.exit(1);
  }
};

module.exports = connectDB;