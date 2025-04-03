const userModel = require("../model/user.model");

const getUsers = async () => {
  const users = await userModel.find();
  return users;
};

const getByEmail = async (email) => {
  const user = await userModel.find({ email: email });
  return user;
};

const getUsersById = async (uid) => {
  const user = await userModel.findById(uid);
  return user;
};

const createUser = async ({ first_name, last_name, email }) => {
  const userCreated = await userModel.create({ first_name, last_name, email });
  return userCreated;
};

const updateUser = async ({ first_name, last_name, email }, uid) => {
  const userUpdated = await userModel.updateOne(
    { _id: uid },
    { first_name, last_name, email }
  );
  if (userUpdated.modifiedCount === 1) {
    return { first_name, last_name, email, _id: uid };
  }
  return { message: `User de id ${uid} nao foi modificado` };
};

const deleteUser = async (uid) => {
  const user = await userModel.deleteOne({ _id: uid });

  if (user.deletedCount === 1) {
    return { message: `User de id ${uid}  foi deletado` };
  }
  throw new Error(`Impossivel deletar o user de id ${uid} `, 404);
};

module.exports = {
  getUsers,
  createUser,
  getUsersById,
  deleteUser,
  updateUser,
  getByEmail,
};
