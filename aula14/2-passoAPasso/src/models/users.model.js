const mongoose = require('mongoose');
// colecao de tal coisa
const userCollection = 'users'; 

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true
    }
});

const userModel = mongoose.model(userCollection, userSchema);

module.exports = userModel;