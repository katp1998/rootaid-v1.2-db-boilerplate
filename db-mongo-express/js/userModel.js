const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    salt: {
      type: String, 
      required:true}
  },
);

//salt was not considered as it will made this not reusable with other auth tech. salt functionality to seperately implemented with JWT auth

module.exports = mongoose.model("User", userSchema);