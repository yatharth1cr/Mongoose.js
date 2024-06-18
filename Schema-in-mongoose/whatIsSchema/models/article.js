const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let articleSchema = new Schema({
  name: String,
  description: String,
});
