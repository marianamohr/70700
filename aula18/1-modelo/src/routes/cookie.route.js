const express = require("express");

const router = express.Router();

router.get("/setCookie", (req, res) => {
  res
    .cookie("CoderCookie", "Esse Cookie foi setado com sucesso", {
      maxAge: 10000000,
    })
    .send("Cookie");
});

router.get("/getCookie", (req, res) => {
  res.send(req.cookies);
});

router.get("/deleteCookie", (req, res) => {
  res.clearCookie("CoderCookie").send("Cookie deletado");
});

router.get("/setSignedCookie", (req, res) => {
  res
    .cookie("SignedCookie", "Esse Cookie foi assinado com sucesso", {
      maxAge: 100000000,
      signed: true,
    })
    .send("Cookie");
});

router.get("/getSignedCookie", (req, res) => {
  res.send(req.signedCookies);
});

router.post("/set", (req, res) => {
  const { name, email } = req.body;
  console.log(name, email)
  return res.cookie(name, email, { maxAge: 100000 }).send("Cookie setado com sucesso");
});

module.exports = router;
