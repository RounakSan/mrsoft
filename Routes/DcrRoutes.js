const express = require("express");
//const { body, validationResult } = require('express-validator');
const router = express.Router();
const DCR = require("../Schemas/DCR.js");
const MR = require("../Schemas/MR.js");
const DOC = require("../Schemas/Doctor.js");
// Homework : Geolocation + DeviceTime
//geolocation react-native package: https://github.com/michalchudziak/react-native-geolocation

router.post("/savedcr", async (req, res, next) => {
  // Create a new instance of the model using the request body
  // dcr schema ----> DCR.js
  const emp = req.body.emp_id;
  const docFilter = req.body.doc;
  const saved = await MR.findOne({ emp_id: emp });
  const saveDoc = await DOC.findOne(docFilter);
  const dcr = new DCR({
    doc_object: saveDoc._id,
    //Use geolocation
    device_location: req.body.device_location,
    MRid: saved._id,
  });
  dcr.save();
  res.send("Success");

  // Error handling
});
router.get("/getdcr", (req, res, next) => {});
module.exports = router;
