const EErrors = require("../../services/errors/enum");

module.exports = (error, req, res, next) =>{
  if (error.cause) {
    console.log(error.cause);
  } else {
    console.log(error);
  }
  
      res.status(error.code).send({ status: 'error', error: error.cause});
     
 
}