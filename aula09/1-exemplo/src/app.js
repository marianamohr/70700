const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('handlebars', handlebars.engine());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log('teste');

  let user = {
    name: 'João',
    last_name: 'Rezende'
  }

  res.render('index', user);
});

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});