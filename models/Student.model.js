const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
  fName: String,
  lName: String,
  studentId: String,
  nic: String,
  faculty: String,
  gender: String,
  email: String,
  phoneNumber: Number,
  password: String,
});

module.exports = Student = mongoose.model("Student", studentSchema);
