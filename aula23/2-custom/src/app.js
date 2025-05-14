const express = require('express');
const GeralRouter = require('./routers/geral.route');

const app = express();
app.use(express.json())

const geralRouter = new GeralRouter()
app.use("/", geralRouter.getRouter())

module.exports = app;