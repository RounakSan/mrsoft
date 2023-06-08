const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const AREA = require("../Schemas/Area");
const MR = require("../Schemas/MR");
const DOC = require("../Schemas/Doctor")
const  AGENDA = require("../Schemas/Agenda");

//create and assign agenda to MR
router.post("/addAgenda", async (req, res, next) => {
    // const doc = req.body.doc;
    /// Creation of a dummy.
    const tempMR = await MR.findOne({emp_id:2});
    const tempDoc = await DOC.findOne({doc_name:"Rounak Sengupta"});
    const tempArea = await AREA.findOne({area_name:"Tollygunge"});
    // console.log(tempMR,tempArea,tempDoc)
    const Mr = tempMR._id;
    const date = new Date(req.body.date);
    const doc = tempDoc._id;
    const area = tempArea._id;
    const agenda = new AGENDA({area_ids:area,doctor_ids:doc,MRid:Mr,date:date}) ;
    agenda.save();
    res.send(agenda);
});

module.exports = router;
