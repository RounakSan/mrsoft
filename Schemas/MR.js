const mongoose = require("mongoose");

const mr = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("MR", mr);
