const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// instantiate the app
const app = express();

// import User module
const User = require("./models/user.js");

// connect mongoDb
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

// middleware
app.use(logger("dev"));
app.use(express.json());

// routes----------->>>>>>
app.get("/", (req, res) => {
  res.send("Welcome to Mongoose");
});

// use post request
app.post("/users", (req, res) => {
  console.log(req.body);
  User.create({ name: "", email: "", sports: ["cricket", "khokho"] })
    .then(() => {
      console.log(req.body);
    })
    .catch((err) => {
      console.log(err);
    });
});

// use find
app.get("/users", (req, res) => {
  User.find({})
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

//  use Model.find({_id: 'some-id'})
app.get("/users/:id", (req, res) => {
  User.find({ _id: "6675277878276d4ab540702a" })
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

// use Model.findOne({_id: 'some-id'})
app.get("/users/:id", (req, res) => {
  User.findOne({ _id: "6675277878276d4ab540702a" })
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

// use Model.findById(id)
app.get("/users/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  User.findById(id)
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

// use use Model.updateOne
app.put("/users/:id", (req, res) => {
  User.findOneAndUpdate({ name: "yatharth" }, req.body, { new: true })
    .then((updatedUser) => {
      res.json(updatedUser.name);
      console.log(updatedUser);
    })
    .catch((err) => {
      console.log(err);
    });
});

// use Model.findByIdAndUpdate(id)
app.put("/users/:id", (req, res) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true })
    .then((updatedUser) => {
      res.json(updatedUser.sports);
      console.log(updatedUser);
    })
    .catch((err) => {
      console.log(err);
    });
});

// use use Model.findOneAndDelete
app.delete("/users/:id", (req, res) => {
  User.findOneAndDelete({ name: "Sunny" }, req.body)
    .then((deletedUser) => {
      res.json(deletedUser);
      console.log(deletedUser);
    })
    .catch((err) => {
      console.log(err);
    });
});

// use use Model.findByIdAndDelete
app.delete("/users/:id", (req, res) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, req.body)
    .then((deletedUser) => {
      res.json(deletedUser);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Server listener
app.listen(4400, () => {
  console.log("Server is listening at port 4.4k");
});
