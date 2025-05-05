const { createHash } = require("../utils");
const userModel = require("../model/user.model");

const getUsers = async () => {
  const users = await userModel.find({});
  return users;
};

const createUser = async ({ first_name, last_name, email, password, role }) => {
  const newPasswd = await createHash(password);
  const userCreated = await userModel.create({
    first_name,
    last_name,
    email,
    password: newPasswd,
    role,
  });
  return userCreated;
};

const updateUser = async (
  { first_name, last_name, email, password, role },
  uid
) => {
  const userUpdated = await userModel.updateOne(
    { _id: uid },
    { first_name, last_name, email, password, role }
  );
  return userUpdated;
};

const getUsersById = async (uid) => {
  const user = await userModel.findById(uid);
  return [user];
};

const getUsersByEmail = async (user) => {
  console.log(user);
  const userFound = await userModel.findOne({ email: user.username });
  console.log(userFound);
  return userFound;
};

const deleteUser = async (email) => {
  const user = await userModel.deleteOne({ email: email });
  return user;
};

module.exports = {
  getUsers,
  createUser,
  getUsersById,
  deleteUser,
  updateUser,
  getUsersByEmail,
};
