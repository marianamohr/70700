const express = require("express");
const healthRoute = require("./routes/health.route");
const userRoute = require("./routes/user.route");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log("MongoDb Conectado!")
})
.catch((err) => {
    console.log(err);
    process.exit(1);
});

app.use('/health', healthRoute);
app.use('/users', userRoute);


module.exports = app;