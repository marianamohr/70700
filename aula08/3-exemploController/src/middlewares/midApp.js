const middApp = (req, res, next) => {
  console.log('Middleware de aplicação executado na data: ', new Date());
  next();
};

module.exports = middApp;