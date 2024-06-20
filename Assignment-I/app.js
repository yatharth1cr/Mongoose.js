const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// instantiate
const app = express();

// middleware
app.use(logger("dev"));

// connect mongoose
mongoose
  .connect("mongodb://localhost/Assignment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

// routes
app.get("/", (req, res) => {
  res.send("Welcome to Mongoose.js");
});

// Server listner
app.listen(3400, () => {
  console.log("Server is listening at port 3.4k");
});
