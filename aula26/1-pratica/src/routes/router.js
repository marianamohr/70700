const express = require('express');
const viewRouter = require("./views.router");
const userRouter = require("./user.router");
const sessionRouter = require('./session.route');
const cookieRouter = require("./cookie.route");

const router = express.Router()

router.use("/", viewRouter);
router.use('/cookie', cookieRouter);
router.use('/session', sessionRouter);
router.use("/user", userRouter);


module.exports = router;