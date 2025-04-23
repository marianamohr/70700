const mongoose = require('mongoose');
const petCollection = 'pets'; 

const petSchema = new mongoose.Schema({
    name: String,
    animal: String,
    parents: {
        type: Array,
        default: []
    }

});

const petModel = mongoose.model(petCollection, petSchema);

module.exports = petModel;