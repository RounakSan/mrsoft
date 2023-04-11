const mongoose = require("mongoose");

const area = new mongoose.Schema({
  area_name: {
    type: String,
    required: true,
  },
  doctor_ids: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Doctor",
    required: true,
  },
  area_id: {
    type: Number,
    unique: true,
    required: true,
  },
});
module.exports = mongoose.model("Area", area);
