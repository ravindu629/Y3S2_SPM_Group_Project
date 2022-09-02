const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

app.get("/", (req, res) => {
  res.send("Api running");
});

app.use("/api/admins", require("./routes/Admin.route"));
app.use("/api/students", require("./routes/Student.route"));
app.use("/api/staffMembers", require("./routes/Staff.route"));

//support service
app.use("/api/hostaldetails", require("./routes/HostalService.route"));
app.use("/api/transportdetails", require("./routes/TransportService.route"));

app.listen(port, () => {
  console.log("Server is starting on port " + port);
});
