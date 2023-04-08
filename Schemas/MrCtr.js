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

// const initial = new mrctr({ id: "mrval", seq: 1 });
// initial.save();
module.exports = mrctr;
