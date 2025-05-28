const convertUserSnakeToCamel = (u) => {
  return {
    name: u.first_name,
    lastName: u.last_name,
    fullName: u.first_name + " " + u.last_name,
    email: u.email,
    password: u.password,
    role: u.role ??  "user",
  };
};

const convertUserCamelToSnake = (u) => {
  console.log("u",u)
  return {
    first_name: u.firstName,
    last_name: u.lastName,
    email: u.email,
    password: u.password,
    role: u.role ??  "user",
  };
};

module.exports = { convertUserSnakeToCamel, convertUserCamelToSnake };
