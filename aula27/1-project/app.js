const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    origin: "http://127.0.0.1:5500",
  })
);
app.use(express.json());

app.get("/test", (req, res) => {
  return res.send({ message: "resposta" });
});

app.listen(8080, () => console.log("Mãe tá on"));
