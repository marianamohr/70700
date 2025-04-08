const userModel = require("../model/user.model");

const getUsers = async () => {
  let users = await userModel.find();

  users = users.map((user) => converter(user));

  return users;
};

const getById = async (id) => {
  let user = await userModel.findById(id);
  user = converter(user);

  return user;
};

const createUser = async ({ first_name, last_name, email, password }) => {
  const userCreated = await userModel.create({
    first_name,
    last_name,
    email,
    password,
  });
  return userCreated;
};

const deleteUser = async (email) => {
  const userDeleted = await userModel.deleteOne({ email: email });
  return userDeleted;
};

const converter = (user) => {
  // faz a conversão para JSON para que o handlebars consiga renderizar
  // https://github.com/handlebars-lang/handlebars.js/issues/1642
  const userConverted = user.toJSON();
  return userConverted;
};

const updateUser = async ({ first_name, last_name, email, password }, id) => {
  const userUpdated = await userModel.updateOne(
    { _id: id },
    { first_name, last_name, email, password }
  );
};

const addImage = async (email, path) => {
  const updateOne = await userModel.updateOne(
    { email: email },
    { pathImage: path }
  );
  return updateOne;
};

module.exports = {
  getUsers,
  deleteUser,
  getById,
  updateUser,
  createUser,
  addImage,
};
