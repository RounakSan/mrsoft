const mongoose = require("mongoose");

const speciality = new mongoose.Schema({
  speciality_name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Speciality", speciality);
