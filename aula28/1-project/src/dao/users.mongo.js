const userModel = require("../model/user.model");
const { convertUserSnakeToCamel } = require("../dto/users.dto");

const get = async () => {
  const users = await userModel.find({});
  console.log("AAAAAA",users)
  const userList = users.map((user) => {
      return convertUserSnakeToCamel(user);
    });
    return userList;
};

const getByEmail = async (email) => {
  const user = await userModel.find({ email: email });
  return user;
};

const create = async (user) => {
  const userCreated = await userModel.create(user)
  return userCreated;
};

module.exports = { get, getByEmail, create };
