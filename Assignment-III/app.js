const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// instantiate the app
const app = express();

// connect mongoose
mongoose
  .connect("mongodb://localhost/AssignmentIII", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

// middlewares
app.use(logger("dev"));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Welcome to mongoose");
});

// Server listener
app.listen(3500, () => {
  console.log("Server is running at port 3.5k");
});
