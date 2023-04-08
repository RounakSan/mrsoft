const mongoose = require("mongoose");

const mrCtrSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  seq: {
    type: Number,
  },
});

const mrctr = mongoose.model("MRctr", mrCtrSchema);
module.exports = mrctr;
