const mongoose = require('mongoose');
const userCollection = "users"

// exemplo de documento da sua collection
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    pathImage: String
});

const userModel = mongoose.model(userCollection, userSchema);

module.exports = userModel;