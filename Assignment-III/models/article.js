const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ObjectId = Schema.Types.ObjectId;

let articleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [String],
    likes: { type: Number, default: 0, min: 0 },
    author: { type: ObjectId, ref: "User", required: true },
    comments: [{ type: ObjectId, ref: "Comments" }],
  },
  { timestamps: true }
);

// created model
let Article = mongoose.model("Article", articleSchema);

// export
module.exports = Article;
