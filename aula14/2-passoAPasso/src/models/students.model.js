const mongoose = require('mongoose');
// colecao de tal coisa
const studentsCollection = 'students'; 

const studentSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    dni: {
        type: String,
        require: true,
        unique: true
    },
    course: {
        type: String,
        require: true
    },
    grade: {
        type: Number,
        require: true
    },

   
});

const studentModel = mongoose.model(studentsCollection, studentSchema);

module.exports = studentModel;