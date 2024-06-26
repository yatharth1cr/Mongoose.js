const mongoose = require("mongoose");
const { Schema } = require("mongoose");

let articleSchema = new Schema({
  title: String,
  description: String,
  tags: String,
  createdAt: { type: Date, default: new Date() },
  likes: { type: Number, default: 0 },
});

// export
module.exports = mongoose.model("Article", articleSchema);
