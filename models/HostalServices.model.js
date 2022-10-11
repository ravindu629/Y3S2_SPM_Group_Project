const mongoose = require("mongoose");
const { Schema } = mongoose;

const hostalSchema = new Schema({
  hostalID: String,
  hostalName: String,
  address: String,
  bedRooms: String,
  bathrooms: String,
  persons: String,
  charge: String,
  contactNo: String,
});

module.exports = hostalManage = mongoose.model("hostalManage", hostalSchema);