const Router = require("./router");
const jwt = require("jsonwebtoken");

class GeralRouter extends Router {
  init() {
    this.get(
      "/",
      ["PUBLIC"],
      (req, res) => {
        res.sendSuccess("Hello World");
      }
    );

    this.post("/login", ["PUBLIC"], (req, res) => {
      let user = {
        email: req.body.email,
        role: req.body.role,
      };

      let token = jwt.sign(user, "batatinha123");
      res.sendSuccess({ token });
    });

    this.get("/teste", ["ADMIN","PREMIUM"], (req, res) => {
      res.sendSuccess("Eu sou Admin");
    });
  }
}

module.exports = GeralRouter;


// {status: 200, payload}
// {status: 200, message}
// {error: "", status: 200, message}