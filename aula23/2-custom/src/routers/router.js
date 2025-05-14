const express = require("express");
const jwt = require("jsonwebtoken");

class Router {
  constructor() {
    this.router = express.Router();
    this.init();
  }

  getRouter() {
    return this.router;
  }

  init() {}

  get(path, policies, ...callback) {
    this.router.get(
      path,
      this.handlePolices(policies),
      this.generateCustomResponses,
      this.applyCallback(callback)
    );
  }

  post(path, policies, ...callback) {
    this.router.post(
      path,
      this.handlePolices(policies),
      this.generateCustomResponses,
      this.applyCallback(callback)
    );
  }

  applyCallback(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
        await callback.apply(this, params);
      } catch (error) {
        console.error(error);
        params[1].status(500).send(error);
      }
    });
  }

  generateCustomResponses = (req, res, next) => {
    res.sendSuccess = (payload) =>
      res.status(201).json({ status: "success", payload });

    res.sendUserError = (payload) =>
      res.status(400).json({ status: "error", payload });
    next();
  };

  handlePolices = (policies) => (req, res, next) => {
    if (policies[0] === "PUBLIC") return next();
    const authHeaders = req.headers.authorization;
    console.log(authHeaders);
    if (!authHeaders)
      return res.status(401).send({ status: "error", erro: "Unauthorized" });
    const token = authHeaders.split(" ")[1];
    let user = jwt.verify(token, "batatinha123");
    console.log(user);
    if (!policies.includes(user.role.toUpperCase()))
      return res.status(400).send({ status: "error", erro: "sem acesso" });
    next();
  };
  
}

module.exports = Router;
