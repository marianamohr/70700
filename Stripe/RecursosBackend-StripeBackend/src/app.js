const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const paymentRouter = require('./routes/payments.router');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/payments', paymentRouter);

app.listen(8080, () => {
  console.log('Server running on port 8080');
});