import program from "../commander.js";
import dotenv from "dotenv";

const environment = program.Mode;

console.log("AAAAA", environment);
//dotenv.js -mode prod
dotenv.config({
  path: environment === "prod" ? ".env.production" : "./.env.development",
});

export default {
  appPort: process.env.PORT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  env: process.env.ENV,
  secret: process.env.SECRET_KEY,
  port: process.env.PORT,
};
