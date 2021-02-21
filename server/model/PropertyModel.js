const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  strPropertyAddress: {
    type: String,
    required: true,
  },
  strImages: {
    type: String,
    required: true,
  },
  numBeds: {
    type: Number,
    required: true,
  },
  numBaths: {
    type: Number,
    required: true,
  },
  numLandSize: {
    type: Number,
    required: true,
  },
  strTitle: {
    type: String,
    required: true,
  },
  strDescription: {
    type: String,
    required: true,
  },
  numPrice: {
    type: Number,
    required: true,
  },
  strBuyerEmail: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
});

module.exports = mongoose.model("property", propertySchema);
