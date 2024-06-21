const mongoose = require("mongoose");
const { Schema } = require("mongoose");

let userSchema = new Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, lowercase: true, trim: true },
    age: { type: Number, default: 18, min: 0 },
  },
  { timestamps: true }
);

// created model
let User = mongoose.model("User", userSchema);

// exports
module.exports = User;
