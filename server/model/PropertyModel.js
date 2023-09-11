const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    homeAddress: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    bedroom: {
      type: String,
      required: true,
    },
    bathroom: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    floor: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ameneties: {
      type: Array,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    propertyTitle: {
      type: String,
      required: true,
    },
    parking: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Properties", propertySchema);

module.exports = Property;
