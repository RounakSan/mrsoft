const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const doc = new mongoose.Schema({
  doc_name: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  address: {
    type: [String],
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  chamber_time: {
    dayOfWeek: [Number],
    time: [Date],
  },
  MRid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MR",
  },
});
module.exports = mongoose.model("Doctor", doc);
