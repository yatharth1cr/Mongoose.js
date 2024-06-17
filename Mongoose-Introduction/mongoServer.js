const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// instantiate the app
const app = express();

// middleware
app.use(logger("dev"));

// connect to database
mongoose
  .connect("mongodb://localhost/sample", {
    useNewUrlParser: true,
    useUnifiedToplogy: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("");
  });

// routes
app.get("/", (req, res) => {
  res.send("Welcome to mongoServer");
});

app.get("/about", (req, res) => {
  res.send("About Page!");
});

// error handler middleware
app.use((req, res, next) => {
  res.send("Page Not Found!");
});

// server listener
app.listen(3000, () => {
  console.log("Server is listening on port 3k");
});
