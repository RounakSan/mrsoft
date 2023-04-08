const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const MR = require("../Schemas/MR.js");
const DOC = require("../Schemas/Doctor.js");

router.post(
  "/createDoc",
  [body("phone", "Enter a valid phone no.").isLength({ min: 10 })], //checking if mobile number greater than 10
  async (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      res.send("Its your error");
    } else {
      const success = DOC.findOne({ phone: req.body.phone }); //Duplicate validation check for phone numbers
      if (success) {
        res.send("Doctor exists");
      } else {
        try {
          const saved = await MrCounter.findOneAndUpdate(
            //updating counter
            { id: "docval" },
            { $inc: { seq: 1 } },
            { new: true }
          );
          if (!saved) {
            const initial = new MrCounter({ id: "docval", seq: 1 });
            initial.save();
            const dr = new DOC({
              doc_id: initial.seq,
              doc_name: req.body.name,
              speciality: req.body.speciality,
              degree: req.body.degree,
              category: req.body.cateogy,
              address: req.body.address,
              phone: req.body.phone,
              chamber_time: req.body.chamber_time,
            });
            dr.save();
          } else {
            const dr = new DOC({
              doc_id: saved.seq,
              doc_name: req.body.name,
              speciality: req.body.speciality,
              degree: req.body.degree,
              category: req.body.cateogy,
              address: req.body.address,
              phone: req.body.phone,
              chamber_time: req.body.chamber_time,
            });
            dr.save();
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
);
module.exports = router;

// {"doc_name": "Abhijit Sengupta",
// "speciality": "Sexology",
// "degree": "Ph.D",
// "category": "Core",
// "address": ["12/A,qwerty,Kolkata-700016"],
// "phone": "9208274002",
// "chamber_time": {
//   "dayOfWeek": [4],
//   "time": ["2023-04-11T09:00:00Z"]}

// }
