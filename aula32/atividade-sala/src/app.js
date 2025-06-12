const express = require('express');
const userRouter = require('./routers/user');
const errorHandler = require('./middlewares/error/index')

const app = express();
const server = app.listen(8080, () => {
  console.log("Listening on 8080");
});

app.use(express.json());

app.use('/api/users', userRouter);
app.use(errorHandler);