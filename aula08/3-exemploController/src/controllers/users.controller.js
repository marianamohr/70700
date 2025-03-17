let users = [];

const getUsers = (req, res) => {
  return res.status(200).json(users);
};

const addUser = (req, res) => {
  try {
    const novoUser = req.body;
    users.push(novoUser);
    return res.status(201).json(novoUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ erro: 'Erro ao cadastrar usuário' });
  }
}

module.exports = {
  getUsers,
  addUser,
}