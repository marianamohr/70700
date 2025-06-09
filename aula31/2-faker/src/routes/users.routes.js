const express = require('express');

const generateUsers = require("../utils/generateUsers")

const router = express.Router();


router.get('/:number', (req, res) => {
const users = generateUsers(req.params.number)
    res.json({ users: users });
});

module.exports = router;