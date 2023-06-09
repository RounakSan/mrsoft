const mongoose = require("mongoose");

const DCR = new mongoose.Schema({
  doc_object: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  //Use geolocation
  device_location: {
    type: String,
    required: true,
  },
  MRid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MR",
    required: true,
  },
});
module.exports = mongoose.model("DCR", DCR);
