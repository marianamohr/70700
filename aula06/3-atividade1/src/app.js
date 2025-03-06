import express from 'express';

const app = express();

const fakeUsers = [
  {
    id: 1,
    nome: "John",
    sobrenome: "Doe",
    idade: 25,
    email: "john.doe@example.com",
  },
  {
    id: 2,
    nome: "Alessandra",
    sobrenome: "Rezende",
    idade: 37,
    email: "alerezende@example.com",
  },
  {
    id: 3,
    nome: "Sue",
    sobrenome: "Doe",
    idade: 30,
    email: "suedoe@example.com",
  },
];

app.get('/bemvindo', (req, res) => {
  const htmlResponse = '` <html> <head> <meta charset="UTF-8"> <title>Página de Boas-Vindas</title> <style> body { font-family: Arial, sans-serif; background-color: #f4f4f4; text-align: center; padding: 20px; } h1 { color: red; } .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); display: inline-block; } </style> </head> <body> <div class="container"> <h1>Bem-vindo ao Express!</h1> <p>Olá, esta é uma resposta HTML formatada.</p> <h3>Servidor Express com HTML</h3> </div> </body> </html>`';
  res.send(htmlResponse);
});

app.get('/usuario', (req, res) => {
  res.status(200).send({ message: fakeUsers });
})

// REQ.QUERY FICA ACIMA DO REQ.PARAMS
// app.get('/usuario/search', (req, res) => {
//   const { nome } = req.query;
//   console.log(req);

//   const user = fakeUsers.find((user) => user.nome === nome);
//   if (!user) {
//     return res.status(404).json({ message: 'Usuário não encontrado' });
//   }

//   return res.status(200).json({ message: 'Usuário encontrado', user });
// });

app.get('/usuario/search', (req, res) => {
  if (!req.query) {
    return res.status(400).json({ message: 'Query não informada' });
  }

  const { query } = req;
  console.log(req.query);

  if (query.nome) {
    const user = fakeUsers.find((user) => user.nome === query.nome);
    return res.status(200).json({ message: 'Usuário encontrado', user });
  } else if (query.sobrenome) {
    const user = fakeUsers.find((user) => user.sobrenome === query.sobrenome);
    return res.status(200).json({ message: 'Usuário encontrado', user });
  } else if (query.email) {
    const user = fakeUsers.find((user) => user.email === query.email);
    return res.status(200).json({ message: 'Usuário encontrado', user });
  }
  return res.status(404).json({ message: 'Usuário não encontrado' });
});

app.get('/usuario/:userId', (req, res) => { // TUDO O QUE VEM NA ROTA É STRING
  console.log(req.params);

  const { userId } = req.params;

  const user = fakeUsers.find((user) => user.id === Number(userId));

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  };

  return res.status(200).json({ message: user})
});

app.get('/usuario/:nome/:sobrenome', (req, res) => {
  console.log(req.params);
  const { nome, sobrenome } = req.params;

  const user = fakeUsers.find((user) => user.nome === nome && user.sobrenome === sobrenome);

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.status(200).json({ message: 'Usuário encontrado', user });
});

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});

