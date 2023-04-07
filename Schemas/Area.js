const mongoose = require("mongoose");

const area = new mongoose.Schema({
  area_name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Area", area);
