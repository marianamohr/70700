const mongoose = require("mongoose");
const userCollection = "users";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  pets: {
    type: [
      {
        pet: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "pets",
        },
      },
    ],
    default: [],
  },
});

userSchema.pre("find", function () {
  this.populate("pets.pet");
});

const userModel = mongoose.model(userCollection, userSchema);

module.exports = userModel;
