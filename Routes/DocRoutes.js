const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const MR = require("../Schemas/MR.js");
const DOC = require("../Schemas/Doctor.js");
const MrCounter = require("../Schemas/MrCtr.js");
const Area = require("../Schemas/Area.js");

router.post(
  "/createDoc",
  [body("phone", "Enter a valid phone no.").isLength({ min: 10 })], //checking if mobile number greater than 10
  async (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      res.send("Its your error");
    } else {
      const success = await DOC.findOne({ phone: req.body.phone }); //Duplicate validation check for phone numbers
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
              category: req.body.category,
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
              category: req.body.category,
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

//Assigning Doctor to the respective areas
router.post("/assignAreaToMR", async (req, res, next) => {
  const parameters = req.body.docs;
  var temp = [];
  parameters.forEach(async (e) => {
    var doc = await DOC.findOne(e);
    const updatedArea = await Area.findOneAndUpdate(
      { area_id: req.body.area_id },
      { $push: { doctor_ids: doc._id } },
      { new: true }
    );
  });
  res.send("Its Done");
});

router.get("/fetchAllDoc", async (req, res, next) => {
  const doctors = await DOC.find({});
  res.send(doctors); //to be updated later in frontend
});

router.get("/fetchDocforAllArea", async (req, res, next) => {
  const allAreas = await Area.find({});
  let areaToDoctors = {};
  const wait = allAreas.map(async (a) => {
    let temp = [];
    if (a.doctor_ids) {
      await Promise.all(
        a.doctor_ids.map(async (d) => {
          temp.push(await DOC.findOne({ _id: d }));
        })
      );
    }
    areaToDoctors[a.area_name] = temp;
  });
  await Promise.all(wait);
  res.send(areaToDoctors);
});
// mrmapping i'll get the mrs to areas to the corresponding doctors of that area.
router.get("/mrcategorization", async (req, res, next) => {
  let MRmapping = {};
  const MRs = await MR.find({});
  const promises = MRs.map(async (m) => {
    const areas = m.area_ids;
    let areaToDoctors = {};

    const areaPromise = areas.map(async (a) => {
      const area = await Area.findOne({ _id: a }); //
      let temp = [];
      if (area.doctor_ids) {
        await Promise.all(
          area.doctor_ids.map(async (d) => {
            temp.push(await DOC.findOne({ _id: d }));
          })
        );
      }
      areaToDoctors[area.area_name] = temp;
    });
    await Promise.all(areaPromise);
    MRmapping[m.name] = areaToDoctors;
  });
  await Promise.all(promises);
  res.send(MRmapping);
});

module.exports = router;

// mr wise categorization
