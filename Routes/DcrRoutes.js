const express = require("express");
//const { body, validationResult } = require('express-validator');
const router = express.Router();
const DCR = require("../Schemas/DCR.js");

// Homework : Geolocation + DeviceTime
//geolocation react-native package: https://github.com/michalchudziak/react-native-geolocation

router.post("/savedcr", (req, res, next) => {
  // Create a new instance of the model using the request body
  // dcr schema ----> DCR.js
  const dcr = new DCR({
    doc_name: req.body.doc_name,
    //Use geolocation
    device_location: req.body.device_location,
    MRid: req.body.MRid,
  });
  dcr.save();
  res.send("Success");

  // Error handling
});
router.get("/getdcr", (req, res, next) => {});
module.exports = router;
