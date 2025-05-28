//const userDao = require("../factory/factory");
const userDao = require("../dao/users.local");
//const userDao = require("../dao/users.mongo")

const userDTO = require("../dto/users.dto");
class UserRepostory {
  constructor(dao) {
    this.dao = dao;
  }
  get = async () => {
    const users = await this.dao.get();
    //const usersFormated = users.map((u) => {
    // return userDTO(u);
    // });
    return users;
  };

  getByEmail = async (email) => {
    const users = await this.dao.getByEmail(email);
    return users;
    // return userDTO(users);
  };

  create = async (user) => {
    // {firstName, lastName, email, pasword}
    const userFormated = userDTO.convertUserCamelToSnake(user);
    console.log("converted",userFormated)
    const users = await this.dao.create(userFormated);
    console.log("service", users);
    return userDTO.convertUserSnakeToCamel(users);
  };
}

module.exports = UserRepostory;

/*
const get = async () => {
  const users = await userDao.get();
  const usersFormated = users.map((u) => {
    return userDTO(u);
  });
  return usersFormated;
};

const getByEmail = async (email) => {
  const users = await userDao.getByEmail(email);
  return users;
  // return userDTO(users);
};

const create = async (user) => {
  const users = await userDao.create(user);
  console.log("service", users);
  return users;
  //return userDTO(users);
};

module.exports = { get, getByEmail, create };
*/
