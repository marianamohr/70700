const express = require('express');
const geralRouter = require('./routers/geral.route');
const petsRouter = require('./routers/pets.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
//app.use("/", geralRouter)
app.use("/pets", petsRouter)

module.exports = app;