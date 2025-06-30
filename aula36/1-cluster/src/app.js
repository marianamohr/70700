const express = require("express");
////const cluster = require("cluster");
///const { cpus } = require("node:os");
//const http = require("node:http");

//const numProcess = cpus().length;

/* if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
  for (let i = 0; i < numProcess; i++) {
    cluster.fork();

    console.log(`Worker ${process.pid} started`);
  }
} else {
  console.log(`Worker ${process.pid} started`);
} */

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/simpleOperation", (req, res) => {
  // const { logger } = req;
  // logger.http(`to no simpleOperation`);

  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  res.send("Sum is: " + sum);
});

app.get("/complexOperation", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 10000000000000; i++) {
    sum += i;
  }
  res.send("Sum is: " + sum);
});

module.exports = app;
