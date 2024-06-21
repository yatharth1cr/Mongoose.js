const mongoose = require("mongoose");
const { Schema } = require("mongoose");

let userSchema = new Schema({
  name: String,
  email: String,
  sports: [String],
});

// store the user model in variable User
let User = mongoose.model("User", userSchema);

// export the userSchema
module.exports = User;
