const UserRepository = require("../service/user.service");
const userDao = require("../factory/factory");
const dto = require("../dto/users.dto");

const service = new UserRepository(userDao);

const get = async (req, res) => {
  const user = await service.get();
  return res.status(200).json({ message: user });
};

const getByEmail = async (req, res) => {
  const { email } = req.params;
  const user = await service.getByEmail(email);
  return res.status(200).json({ message: user });
};

const create = async (req, res) => {
  const user = req.body;
  console.log(user);
  const userCreated = await service.create(user);
  return res.status(200).json({ message: userCreated });
};

module.exports = { get, getByEmail, create };
