const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const viewsRouter = require('./routes/views.router');
const usersRouter = require('./routes/users.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewsRouter);
app.use('/users', usersRouter);

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});