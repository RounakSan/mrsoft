const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const AREA = require("../Schemas/Area");
const MrCounter = require("../Schemas/MrCtr.js");
const MR = require("../Schemas/MR");
const DOC = require("../Schemas/Doctor")

//create and assign agenda to MR
router.post("/addAgenda", async (req, res, next) => {
    const doc = req.body.name;
    const doc_phone = req.body.phone;
    const area = AREA
});


module.exports = router;
