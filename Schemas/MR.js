const mongoose = require("mongoose");
const mrSchema = new mongoose.Schema({
  emp_id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  area_ids: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Area",
    required: true,
  },
});
const mr = mongoose.model("MR", mrSchema);

module.exports = mr;
