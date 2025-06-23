const winston = require("winston");

const config = require("../config/config");

const ENV = config.env;

const customLevelOptions = {
  levels: {
    fatal: 0,
    error: 1,
    warning: 2,
    info: 3,
    debug: 4,
  },
  colors: {
    fatal: "red",
    error: "orange",
    warning: "yellow",
    info: "blue",
    debug: "white",
  },
};
const loggerDev = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console({
      level: "debug",
      // format: winston.format.combine(
      //  winston.format.colorize({ colors: customLevelOptions.colors }),
      //   winston.format.simple()
      // ),
    }),
  ],
});

const loggerProd = winston.createLogger({
  level:customLevelOptions.levels,
  transports: [
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize({colors: customLevelOptions.colors}),
        winston.format.simple()
      )
    }),
    new winston.transports.File({
      filename: "./errors.log",
      level: "warn",
      format: winston.format.simple()
    }),
  ],
});

const log = (req, res, next) => {
  /*
  if (ENV === "prod") {
    req.logger = loggerProd;
  } else {
    req.logger = loggerDev;
  }
*/

  req.logger = loggerProd;
  req.logger.http(`${req.method} na ${req.url} - ${new Date()} - ENV ${ENV}`);
  req.logger.info(`${req.method} na ${req.url} - ${new Date()}`);
  req.logger.debug(`${req.method} na ${req.url} - ${new Date()}`);
  req.logger.fatal(`${req.method} na ${req.url} - ${new Date()}`);

  next();
};

module.exports = log;
