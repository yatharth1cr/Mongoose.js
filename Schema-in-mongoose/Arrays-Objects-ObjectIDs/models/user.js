const mongoose = require("mongoose");
const { Schema } = mongoose;

let userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
  favorites: [String],
  marks: [Numbers],
});
