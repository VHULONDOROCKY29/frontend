const express = require('express');
const router = express.Router();
const ClientProject = require('../models/ClientProject');

// POST route to handle client project form submission
router.post('/', (req, res) => {
  const { projectName, description, email, startDate } = req.body;

  const newClientProject = new ClientProject({
    projectName,
    description,
    email,
    startDate,  // Updated to startDate
  });

  newClientProject.save()
    .then((clientProject) => {
      res.status(201).json({ message: 'Client project request submitted successfully!', clientProject });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to submit project request', error: err });
    });
});

module.exports = router;
