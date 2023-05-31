const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const AREA = require("../Schemas/Area");
const MrCounter = require("../Schemas/MrCtr.js");
const MR = require("../Schemas/MR");
const DOC = require("../Schemas/Doctor")
const  AGENDA = require("../Schemas/Agenda");

//create and assign agenda to MR
router.post("/addAgenda", async (req, res, next) => {
    // const doc = req.body.doc;
    const MR = req.body.mr;
    const date = req.body.date;
    const time = req.body.time;
    const doc = req.body.doc;
    const area = req.body.area;
    const agenda = new AGENDA({area_ids:area,doctor_ids:doc,MRid:MR,date:date,time:time}) ;
    agenda.save();
    res.send(agenda);
});

module.exports = router;
