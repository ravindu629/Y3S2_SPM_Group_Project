const mongoose = require("mongoose");
const { Schema } = mongoose;

const transportSchema = new Schema({
  transportID: String,
  vehicleType: String,
  ownerName: String,
  capacity: String,
  coverage: String,
  time: String,
  contactNo: String,
});

module.exports = transportManage = mongoose.model("transportManage", transportSchema);