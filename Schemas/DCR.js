const mongoose = require("mongoose");

const DCR = new mongoose.Schema({
  doc_name: {
    type: String,
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
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("DCR", DCR);
