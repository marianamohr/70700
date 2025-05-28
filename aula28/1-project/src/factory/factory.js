const { persistence } = require("../config/config");
// oracle, mysql, cassandra, mariadb, mongo, local, files
const userDaoMongo = require("../dao/users.mongo");
const userDaoLocal = require("../dao/users.local");

let dao;

switch (persistence) {
  case "mongo":
    dao = userDaoMongo;
    break;
  case "memory":
    dao = userDaoLocal;
    break;
     case "sql":
    dao = userDaoSql;
    break;
}

module.exports = dao;
