const express = require("express");

const router = express.Router();

router.get("/setSigned", (req, res) => {
  res
    .cookie("SignedCookie", "Esse Cookie foi assinado com sucesso", {
      maxAge: 100000000,
      signed: true,
    })
    .send("Cookie");
});

router.get("/set", (req, res) => {
    console.log(req.cookies);
  res
    .cookie("CoderCookie", "Esse Cookie foi setado com sucesso", {
      maxAge: 10000000000,
    })
    .send("Cookie");
});

router.post("/set", (req, res) => {
  const { name, email, } = req.body;
  res.cookie(name, email, { maxAge:100000 }).send("Cookie setado com sucesso");
});

router.get("/delete", (req, res) => {
  res.clearCookie("CoderCookie").send("Cookie deletado");
});

module.exports = router;
