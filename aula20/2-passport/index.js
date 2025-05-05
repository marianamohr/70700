const bcrypt = require("bcrypt");

const createHash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const isValidatePassword = async (password, passCripted) => {
  const valid = await bcrypt.compare(password, passCripted);
  return valid;
};

const main = async () => {
  const senha = "123456";

  const senhaBcrypt = await createHash(senha)
  console.log(senha)
  console.log(senhaBcrypt)
  const isValid = await isValidatePassword("senha", senhaBcrypt)
  console.log(isValid)
};

main();
