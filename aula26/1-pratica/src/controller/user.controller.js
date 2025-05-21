const userService = require("../service/user.service");

const login = async (req, res) => {
  console.log("to no login rota", req.user);
  if (!req.user)
    return res.status(400).json({ status: "error", message: "Unauthorized" });

  const user = {
    first_name: req.user.first_name,
    last_name: req.user.last_name,
    email: req.user.email,
    role: req.user.role,
    token: req.user.token,
  };
  req.session.user = user;
  return res.cookie("accessToken", req.user.token).redirect("/home");
};

const register = async (req, res) => {
  const user = req.body;
  const newUser = await userService.createUser(user);
  res.render("userCreated", { name: newUser.first_name });
};

const deleteUser = async (req, res) => {
  const { email } = req.params;
  await userService.deleteUser(email);
  res.render("userDeletado", { email });
};

const updateUser = async (req, res) => {
  try {
    console.log("to no PUT");
    const user = req.body;
    const { uid } = req.params;
    console.log(uid);
    const newUser = await userService.updateUser(user, uid);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { login, register, deleteUser, updateUser };
