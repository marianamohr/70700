const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Olá Mundo!" });
});

app.listen(8080, () => {
  console.log("Ouvindo");
});
