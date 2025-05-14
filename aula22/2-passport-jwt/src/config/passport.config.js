const passport = require('passport');
const jwt = require('passport-jwt');

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
       return token = req.cookies['accessToken'];
    }
};

const initializePassport = () => {
    passport.use('jwt', new 
    JWTStrategy({jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
    secretOrKey: 'batatinha123' // deve ser igual a senha do generate token
    },
    async(jwt_payload, done) => {
        console.log("AAAAAAA", jwt_payload);
        try {
            return done(null, jwt_payload);
        } catch (error) {
            return done(error);
        }
    }));
};

module.exports = initializePassport;