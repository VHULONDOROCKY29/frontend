const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  name: String,
  number: String,
  email: String,
  address: String,
  age: Number,
  idNumber: String,
  gender: String,
  race: String,
  hasITQualification: String,
  qualificationStatus: String,
  idCopy: String,
  cv: String,
  certificate: String,
  grade12: String,
  miscDoc: String,
  popiConsent: Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Internship', internshipSchema);
