const userModel = require("../model/user.model");

const getUsers = async (nome, page, limit) => {
  const options = {
    page: page, // Página atual
    limit: limit, // Número de documentos por página
  };
  let users = await userModel.paginate({ first_name: nome }, options);
  console.log(users);
  return users;
};

const getAll = async ( page, limit) => {
  try {
    const options = {
      page: page, // Página atual
      limit: limit, // Número de documentos por página
      sort: { first_name: 1 }, // Ordenar pelo primeiro nome
    };

    const result = await userModel.paginate({}, options);
    return result;
  } catch (error) {
    console.error("Erro ao paginar:", error);
  }
};

module.exports = { getUsers, getAll };
