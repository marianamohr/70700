const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get("/github", passport.authenticate('github', {scope:['user:email']}), (req, res) => {})


router.get("/githubcallback", passport.authenticate('github', { failureRedirect: '/login' }),
  async (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
  });
module.exports = router;
