const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const mr = require("../Schemas/MR.js");
const DOC = require("../Schemas/Doctor.js");
const AREA = require("../Schemas/Area");
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
      const success = await mr.findOne({ phone: req.body.phone }); //Duplicate validation check for phone numbers
      console.log(success);
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
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
);

//Assign doctors to MR
router.put("/assignMR", async (req, res, next) => {
  let yes = false; //will be entered by user in front-end  ----> if true update
  const e_id = req.body.emp_id;
  const employee = await mr.findOne({ emp_id: e_id }); //no need to null check, because we will give user a list of MRs to select from

  const docFilter = req.body.doc;
  let saved = await DOC.findOne(docFilter);
  if (saved.MRid && !yes) {
    res.send("Fuck off mate! Waste of my bloody time");
  } else {
    saved = await DOC.findOneAndUpdate(
      docFilter,
      { MRid: employee._id },
      { new: true }
    );
    res.send(saved);
  }
});

module.exports = router;
