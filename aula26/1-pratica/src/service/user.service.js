const { createHash } = require("../utils");
const userModel = require("../model/user.model");

const getUsers = async () => {
  const users = await userModel.find({});
  //[a,b,c,d]
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
  const userFound = await userModel.findById(uid);
  let user = [userFound]
  user = user.map((u) => u.toJSON());
  return user;
};

const getUsersByEmail = async (email) => {
  const userFound = await userModel.findOne({ email });
  let user = [userFound]
  user = user.map((u) => u.toJSON());
  return userFound;
};

const deleteUser = async (email) => {

  // validar se o user nao tem carrinho de compras ativo
  const user = await userModel.deleteOne({ email: email });
  return user;
};

const listAllAndValidationAccess = async (userRole) => {
  let users = await getUsers();
  // faz a conversão para JSON para que o handlebars consiga renderizar
  // https://github.com/handlebars-lang/handlebars.js/issues/1642
  users = users.map((user) => user.toJSON());
  return {users, isAdmin: validationAccess(userRole)};
};

const validationAccess = (userRole) => {
  return  userRole === "admin" || false
}

module.exports = {
  getUsers,
  createUser,
  getUsersById,
  deleteUser,
  updateUser,
  getUsersByEmail,
  listAllAndValidationAccess,
  validationAccess,
};
