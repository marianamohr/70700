import express from "express";
import config from "./config/config.js";
import { fork } from "child_process";
//import complexCalc from "./complexCalc.js"

const app = express();

const PORT = config.port;
const ENV = config.environment;

// node server.js -mode prd
// node server.js
app.get("/", (req, res) => {
  res.send(`Hello World from ${ENV}`);
});

app.get("/sum", (req, res) => {
  const sum = complexCalc();
  res.send(`O valor é ${sum}`);
});


app.get('/sumProcess', (req, res) => { 
    const child = fork('./complexCalc.js')
    console.log("Iniciando ...")
    child.send("Iniciando ...")
    child.on('message', result => {
        console.log("enviado")
        res.send(`O valor é ${result}`);
    })
    
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
