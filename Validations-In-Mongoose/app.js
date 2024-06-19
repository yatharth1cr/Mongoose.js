const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// instantiate the app
const app = express();

// middleware
app.use(logger("dev"));

// mongoose connect
mongoose
  .connect("mongodb://localhost/sample")
  .then(() => {
    console.log("connected to  database");
  })
  .catch((err) => {
    console.log(err);
  });

// routes
app.get("/", (req, res) => {
  res.send("Welcome to mongoose.js");
});

app.get("/about", (req, res) => {
  res.send("Welcomme to About Page!");
});

// server listner
app.listen(3500, () => {
  console.log("Server is listening at port 3.5k");
});
