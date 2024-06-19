const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// instantiate app
const app = express();

// middleware
app.use(logger("dev"));

// connect mongoose
mongoose
  .connect("mongodb://localhost/sample2")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

// routes
app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

// server listener
app.listen(5000, () => {
  console.log("Server is listening at 5k");
});
