const passport = require("passport");
const userModel = require("../model/user.model");
const { createHash, isValidatePassword } = require("../utils/index");
const GitHubStrategy = require("passport-github2").Strategy;

const initializePassport = () => {
  passport.use(
    "github",
    new GitHubStrategy(
      {
        clientID: "Iv1.a7c1c047b4795a87",
        clientSecret: "fe2ad0a37be34d5e370fb552125be228bc5d8957",
        callbackURL: "http://localhost:8080/api/sessions/githubcallback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log(profile);
          console.log(profile._json.email)
          const user = await userModel.findOne({ email: profile._json.email });
          const fullname = profile._json.name.split(' ');
          console.log(user)
          
          if (!user) {
            let newUser = {
              first_name: fullname[0],
              last_name: fullname[1],
              email: profile._json.email,
              perfil: profile._json.type.toLowerCase() || "admin",
              password: "",
            }; 
            let result = await userModel.create(newUser);

            return done(null, result);
          } else{
            return done(null, user);
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
