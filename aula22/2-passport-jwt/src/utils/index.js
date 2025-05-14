const jwt = require("jsonwebtoken");

const PRIVATE_KEY = "batatinha123"; // jamais faça isso

const generateToken = (user) => {
  delete user.password;
  const token = jwt.sign(user, PRIVATE_KEY, { expiresIn: "24h" });
  return token;
};

// Middleware
const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).send({ erroe: "Not authenticated" });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, PRIVATE_KEY, (err, credentials) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ erro: "Not authorized" });
    }
    console.log("AAAAAAA", credentials);
    req.user = credentials;
    next();
  });
};

const authorization = (role) => {
  return async (req, res, next) => {
    console.log("Aqui",req.user)
    if (!req.user) {
      return res.status(401).json({ erro: "Unathorized" });
    }
    console.log(req.user.role, role);
    if (req.user.role !== role) {
      return res.status(403).json({ erro: "Not authorized" });
    }
    next();
  };
};

module.exports = {
  generateToken,
  authToken,
  authorization,
};
