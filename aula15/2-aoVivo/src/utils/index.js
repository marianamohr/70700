const bcrypt = require("bcrypt")

const createHash = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
  const isValidatePassword = async (password, user) => {
    const valid = await bcrypt.compare(password, user.password)
    return valid;
  };
  
  module.exports = {
    createHash,
    isValidatePassword,
  };

