import dotenv from "dotenv";

dotenv.config();

console.log(process);

console.log({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_USER,
    user: process.env.MYSQL_PORT,
    pass: process.env.MYSQL_PASSWORD,
    environment: process.env.ENV,
    secret_key: process.env.SECRET_KEY,
  });