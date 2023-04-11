const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const AREA = require("../Schemas/Area");
const MrCounter = require("../Schemas/MrCtr.js");
const MR = require("../Schemas/MR");

//Create new MR
router.post(
  "/createArea",
  [body("area", "Enter a valid area name").isLength({ min: 4 })], //checking if area's length is 4 character
  async (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      res.send("Its your error");
    } else {
      const success = await AREA.findOne({ area_name: req.body.area }); //Duplicate validation check for area
      console.log(success);
      if (success) {
        res.send("Area already exists");
      } else {
        try {
          const saved = await MrCounter.findOneAndUpdate(
            //updating counter
            { id: "areaval" },
            { $inc: { seq: 1 } },
            { new: true }
          );
          if (!saved) {
            const initial = new MrCounter({ id: "areaval", seq: 1 });
            initial.save();
            const ar = new AREA({
              area_id: initial.seq,
              area_name: req.body.area,
            });
            ar.save();
          } else {
            const ar = new AREA({
              area_id: saved.seq,
              area_name: req.body.area,
            });
            ar.save();
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
);

// Assign areas to MR
router.post("/assignAreaToMR", async (req, res, next) => {
  let yes = false; //will be entered by user in front-end  ----> if true update
  const e_id = req.body.emp_id;
  //no need to null check, because we will give user a list of AREAs to select from

  const areaFilter = req.body.area_id;
  let saved = await AREA.findOne({ area_id: areaFilter });
  const updatedMR = await MR.findOneAndUpdate(
    { emp_id: e_id },
    { $push: { area_ids: saved._id } },
    { new: true }
  );
  console.log(updatedMR);
  res.send(saved);
});

module.exports = router;
