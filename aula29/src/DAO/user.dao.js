const userModel = require("../models/user.model");

const getUsers = async () => {
  let users = await userModel.find();
  users = users.map((u) => {
    u.toJSON();

    return u;
  });
  return users;
};

const getUserById = async (id) => {
  const user = await userModel.findById(id);

  return user;
};

const createUser = async (user) => {
  const userCreated = await userModel.create(user);
  return userCreated;
};

const updateUser = async (id, data) => {
  console.log("aqui", id, data);
  const user = await userModel.updateOne({ _id: id }, { $set: data });

  return user;
};

module.exports = { getUsers, createUser, getUserById, updateUser };
