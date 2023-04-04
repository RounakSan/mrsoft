const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Homework : Geolocation + DeviceTime
router.post('/saveDCR', (req, res) => {
    // Create a new instance of the model using the request body
    // make a dcr schema
    const dcr = new DCR({
      doc_name: req.body.name,
      time: req.body.date,
      date: req.body.date,
      //Use geolocation
      device_location:req.body.location,
      submit_date:req.body.submit_date,
      MRid:req.body.MRid
    });
  
    // Save the new user to the database
    dcr.save((err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error saving user');
      } else {
        res.send('DCR saved successfully');
      }
    });
  });