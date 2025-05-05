const passport = require("passport");
const local = require("passport-local");
const userModel = require("../model/user.model");
const { createHash, isValidatePassword } = require("../utils/index");

const initializePassport = () => {
  passport.use(
    "register",
    new local.Strategy(
      { passReqToCallback: true, usernameField: "email" },
      async (req, username, password, done) => {
        const { first_name, last_name, email, role } = req.body;
        try {
          let user = await userModel.findOne({ email: username });
          if (user) {
            console.log("user exists");
            return done(null, false);
          }
          const newPass = await createHash(password);
          const novoUser = {
            first_name,
            last_name,
            email,
            password: newPass,
            role,
          };
          let newUser = await userModel.create(novoUser);
          return done(null, newUser);
        } catch (error) {
          return done(`Erro ao obter user ${error}`);
        }
      }
    )
  );

  passport.use(
    "login",
    new local.Strategy(
      { usernameField: "username" },
      async (username, password, done) => {
        try {
         
          const user = await userModel.findOne({ email: username });
          if (!user) {
            console.log("user not found");
            return done(null, false);
          }
          const isPasswordValidTest = await isValidatePassword(password, user);
          console.log(isPasswordValidTest);
          if (isPasswordValidTest) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        } catch (error) {
          return done(`Erro ao obter user ${error}`);
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await userModel.findById(id);
      done(null, user);
    } catch (error) {
      done(`Erro ao obter user ${error}`);
    }
  });
};

module.exports = initializePassport;
