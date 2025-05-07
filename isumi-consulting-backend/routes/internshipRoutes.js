const express = require('express');
const multer = require('multer');
const path = require('path');
const Internship = require('../models/Internship');

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname.replace(/\s+/g, '_');
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

const uploadFields = upload.fields([
  { name: 'cv', maxCount: 1 },
  { name: 'idCopy', maxCount: 1 },
  { name: 'certificate', maxCount: 1 },
  { name: 'grade12', maxCount: 1 },
  { name: 'miscDoc', maxCount: 1 },
]);

router.post('/', uploadFields, async (req, res) => {
  try {
    const {
      name, number, email, address, age,
      idNumber, gender, race,
      hasITQualification, qualificationStatus, popiConsent,
    } = req.body;

    const files = req.files;

    const newInternship = new Internship({
      name,
      number,
      email,
      address,
      age,
      idNumber,
      gender,
      race,
      hasITQualification,
      qualificationStatus,
      popiConsent: popiConsent === 'true', // Handle checkbox boolean
      idCopy: files.idCopy?.[0]?.filename || '',
      cv: files.cv?.[0]?.filename || '',
      certificate: files.certificate?.[0]?.filename || '',
      grade12: files.grade12?.[0]?.filename || '',
      miscDoc: files.miscDoc?.[0]?.filename || '',
    });

    const saved = await newInternship.save();
    res.status(201).json({ message: 'Internship application submitted successfully!', internship: saved });
  } catch (err) {
    console.error('Error saving internship:', err);
    res.status(500).json({ message: 'Failed to submit internship application', error: err });
  }
});

module.exports = router;
