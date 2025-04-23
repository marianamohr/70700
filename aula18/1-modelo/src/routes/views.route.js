const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.session.admin);
  res.render("index", { isAdmin: req.session.admin });
});

module.exports = router;
