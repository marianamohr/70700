const validationUser = (req, res, next) => {
    const user = req.body;
    if (!user.first_name || !user.last_name || !user.email) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    next();
  };
  
  module.exports = validationUser;