const mongoose = require("mongoose");
const userCollection = "Users";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  orders: [
     {
       type: mongoose.Schema.ObjectId,
       ref: "Orders",
      },
  ],
});

const userModel = mongoose.model(userCollection, userSchema);

module.exports = userModel;
