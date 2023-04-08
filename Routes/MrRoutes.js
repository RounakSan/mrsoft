const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const mr = require("../Schemas/MR.js");
const DOC = require("../Schemas/Doctor.js");
const MrCounter = require("../Schemas/MrCtr.js");

//Create new MR
router.post(
  "/createMR",
  [body("phone", "Enter a valid phone no.").isLength({ min: 10 })], //checking if mobile number greater than 10
  async (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      res.send("Its your error");
    } else {
      const success = mr.findOne({ phone: req.body.phone }); //Duplicate validation check for phone numbers
      if (success) {
        res.send("User exists");
      } else {
        try {
          const saved = await MrCounter.findOneAndUpdate(
            //updating counter
            { id: "mrval" },
            { $inc: { seq: 1 } },
            { new: true }
          );
          if (!saved) {
            const initial = new MrCounter({ id: "mrval", seq: 1 });
            initial.save();
            const MR = new mr({
              emp_id: initial.seq,
              name: req.body.name,
              phone: req.body.phone,
            });
            MR.save();
          } else {
            const MR = new mr({
              emp_id: saved.seq,
              name: req.body.name,
              phone: req.body.phone,
            });
            MR.save();

            // try {
            //   const doc1 = new DOC({
            //     doc_name: "Abhijit Sengupta",
            //     speciality: "Sexology",
            //     degree: "Ph.D",
            //     category: "Core",
            //     address: ["12/A,qwerty,Kolkata-700016"],
            //     phone: "9208274892",
            //     chamber_time: {
            //       dayOfWeek: [4],
            //       time: [new Date("2023-04-11T09:00:00Z")],
            //     },
            //     MRid: MR._id,
            //   });
            //   doc1.save();
            // } catch (error) {
            //   console.error("Error while saving document:", error);
            // }
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
);

// Assign doctors to MR
router.post("/assignMR", async (res, req, next) => {});

module.exports = router;
