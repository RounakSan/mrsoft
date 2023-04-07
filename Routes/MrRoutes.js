const express = require("express");
//const { body, validationResult } = require('express-validator');
const router = express.Router();
const MR = require("../Schemas/MR.js");
const DOC = require("../Schemas/Doctor.js");

router.post("/createMR", async (req, res, next) => {
  const mr = new MR({
    name: req.body.name, //tbd: check for duplicates
  });
  try {
    const savedMR = await mr.save();
    console.log("Document saved:", savedMR);

    const doc1 = new DOC({
      doc_name: "Abhijit Sengupta",
      speciality: "Sexology",
      degree: "Ph.D",
      category: "Core",
      address: ["12/A,qwerty,Kolkata-700016"],
      phone: "9208274892",
      chamber_time: {
        dayOfWeek: [4],
        time: [new Date("2023-04-11T09:00:00Z")],
      },
      MRid: savedMR._id,
    });
    doc1.save();
  } catch (error) {
    console.error("Error while saving document:", error);
  }
});
module.exports = router;
