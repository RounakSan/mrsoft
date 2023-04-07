const mongoose = require("mongoose");

const cluster = new mongoose.Schema({
  cluster_name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Cluster", cluster);
