const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const viewRouter = require('./routes/view.router');

const app = express();
app.engine('handlebars', handlebars.engine());

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewRouter);

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});