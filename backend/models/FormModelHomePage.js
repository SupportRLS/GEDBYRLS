const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,
  surname: String,
  société: String,
  phone: String,
  email: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model('Form', formSchema);