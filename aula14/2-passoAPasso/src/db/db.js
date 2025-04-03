const mongoose = require("mongoose")

const connection = () =>{
    return mongoose.connect('mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("MongoDb Conectado!")
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
}

module.exports = connection

