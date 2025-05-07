const mongoose = require('mongoose');

const clientProjectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  description: { type: String, required: true },
  email: { type: String, required: true },
  startDate: { type: String, required: true },  // Updated to startDate
});

module.exports = mongoose.model('ClientProject', clientProjectSchema);
