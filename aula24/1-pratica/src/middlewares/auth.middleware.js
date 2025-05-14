const auth = (req, res, next) => {
  console.log(req.user);
  if (req.user.role === "user") {
    return next();
  }
  return res.status(404).json({ message: "You dont have autorization to do this" });
};

module.exports = auth;
