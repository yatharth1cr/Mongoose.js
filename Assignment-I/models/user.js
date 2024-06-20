const mongoose = require("mongoose");
const { Schema } = require("mongoose");

let userSchema = new Schema(
  {
    name: String,
    email: { type: String, lowercase: true },
    age: { type: Number, default: 0 },
    password: { type: String, minlength: 5 },
    createAt: { type: Date, default: new Date() },
    favourites: [String],
  },
  { timestamps: true }
);

// export
module.exports = mongoose.model("User", userSchema);
