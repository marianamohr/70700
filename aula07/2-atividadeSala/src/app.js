const express = require('express');
const ManagerUsers = require('./ManagerUsers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const managerUsers = new ManagerUsers();

app.get('/api/users', async (req, res) => {
  try {
    const users = await managerUsers.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/users', async (req, res) => {
  const { first_name, last_name, email, course } = req.body;
  try {
    const newUser = await managerUsers.createUser(first_name, last_name, email, course);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.get('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await managerUsers.getUserById(id); // + ou Number(id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
});

app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, course } = req.body;
  try {
    const updatedUser = await managerUsers.updateUser(id, { firstName, lastName, email, course }); 
    res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json({ message: 'Invalid request', error: error.message });
  }
});

app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await managerUsers.deleteUser(Number(id));
    res.status(204).end();
  } catch (error) {
    return res.status(404).json({ message: 'User not found', error: error.message });
  }
});

app.patch('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;
  try {
    const patchedUser = await managerUsers.patchUser(id, updatedFields);
    console.log(patchedUser);
    res.status(200).json(patchedUser);
  } catch (error) {
    return res.status(404).json({ message: 'User not found', error: error.message });
  }
});

app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});