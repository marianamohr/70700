

const getUsers = async () => {
    return  true
};

const createUser = async ({ first_name, last_name, email, password, role }) => {
    return  true
};

const updateUser = async (
  { first_name, last_name, email, password, role },
  uid
) => {
    return  true
};

const getUsersById = async (uid) => {
    return  true
};

const getUsersByEmail = async (email) => {
    return  true
};

const deleteUser = async (email) => {
    return  true
};

const listAllAndValidationAccess = async (userRole) => {
    return  true
};

const validationAccess = (userRole) => {
  return  true
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

