const mongoose = require("mongoose");
const { Schema } = require("mongoose");

let addressSchema = new Schema(
  {
    village: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin: Number,
    user: ObjectId,
  },
  { timestamps: true }
);

// export
module.exports = mongoose.model("Address", addressSchema);
