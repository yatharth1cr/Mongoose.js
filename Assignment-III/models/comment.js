const mongoose = require("mongoose");
const { Schema } = require("mongoose");

let commentSchema = new Schema(
  {
    content: { type: String, required: true },
    author: { type: ObjectId, ref: "User", required: true },
    article: { type: ObjectId, ref: "Article", required: true },
  },
  { timestamps: true }
);

// created model
let Comments = mongoose.model("Comments", commentSchema);

// export
module.exports = Comments;
