const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();

router.get("/", userController.get);
router.get("/:email", userController.getByEmail);
router.post("/", userController.create);

module.exports = router;
