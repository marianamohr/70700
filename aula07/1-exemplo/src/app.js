const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [];

app.post('/api/users', (req, res) => {
  const { id, name, email } = req.body;
  console.log(req.body);
  if (!id || !name || !email) {
    return res.status(400).json({ message: 'Some fields are required' });
  }
  const newUser = { id, name, email };
  users.push(newUser);
  return res.status(201).json(newUser);
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex(user => user.id === +id);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users.splice(userIndex, 1);
  return res.status(204).send();
});

app.get('/api/users', (req, res) => {
  return res.status(200).json({ users });
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find(user => user.id === +id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  user.name = name;
  user.email = email;
  return res.status(200).json(user);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
})