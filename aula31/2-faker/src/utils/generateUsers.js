const { faker } = require("@faker-js/faker");

const generateUsers = (number) => {
  const users = [];

  for (let index = 0; index < number; index++) {
    const user = {
      name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      sex: faker.person.sex(),
      lat: faker.location.latitude(),
      long: faker.location.longitude(),
      company: faker.company.name(),
      city: faker.location.city(),
      tutor: faker.datatype.boolean()
    };
    user.full_name = `${user.name} ${user.last_name}`
    users.push(user);
  }
  return users;
};

module.exports = generateUsers;
