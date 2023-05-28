const mongoose = require("mongoose");

const agenda = mongoose.Schema({
  area_ids: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "area",
    required: true,
  },
  doctor_ids: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Doctor",
    required: true,
  },
  MRid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MR",
    required: true,
  },
  date: {
    type: date,
  },
});
module.exports = mongoose.model("Agenda", agenda);