const userModel = require("../model/user.model");
const { createHash } = require("../utils/index");

const createUser = async (user) => {
  const hash = await createHash(user.password);
  user.password = hash;
  user.pathImage = "";

  const userCreated = await userModel.create(user);
  return userCreated;
};

const getUsers = async () => {
  let users = await userModel.find({});
  // faz a conversão para JSON para que o handlebars consiga renderizar
  // https://github.com/handlebars-lang/handlebars.js/issues/1642
  users = users.map((user) => user.toJSON());
  return users;
};

const deleteUser = async (email) => {
  const userDeleted = await userModel.deleteOne({ email: email });

  return userDeleted;
};

const updateUser = async (user, uid) => {
  const userUpdated = await userModel.updateOne({ _id: uid }, user);
  return userUpdated;
};
const getUserbyId = async (uid) => {
  let user = await userModel.findById(uid);
  user = user.toJSON();
  return user;
};

const updatePathByUserEmail = async (dado) => {
  const update = await userModel.updateOne(
    { email: dado.email },
    { pathImage: dado.pathImage }
  );

  return update
};

module.exports = {
  createUser,
  getUsers,
  deleteUser,
  updateUser,
  getUserbyId,
  updatePathByUserEmail,
};
