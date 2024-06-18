const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// instantiate the app
const app = express();

mongoose
  .connect(
    "mongodb://localhost/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.6",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

// middleware
app.use(logger("dev"));

// routes
app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.get("/about", (req, res) => {
  res.send("About Page!");
});

// server listener
app.listen(4000, () => {
  console.log("Server is listening at port 4k");
});
