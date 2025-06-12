const { Router } = require('express');
const CustomError = require('../services/errors/CustomError');
const EErrors = require('../services/errors/enum');
const { generateUserErrorInfo, invalidParamErrorInfo } = require('../services/errors/info');

const users = [];

const router = Router();

router.get('/', (req, res) => {
  res.send({status: "success", payload: users})
});

router.post('/', (req, res) => {
  const { first_name, last_name, age, email } = req.body;

  if(!first_name || !last_name || !email) {
    const error = CustomError.createError({
      name: "User creation error",
      cause: generateUserErrorInfo({first_name, last_name, email}),
      message: "Erro tentando criar usuário",
      code: EErrors.INVALID_TYPES_ERROR
    })
    return res.send({ status: 'erro', payload: error })
  };

  const user = {
    first_name,
    last_name,
    age,
    email
  };

  if (users.length === 0) {
    user.id = 1
  } else {
    user.id = users[users.length - 1].id +1;
  }
  users.push(user);
  res.send({ status: 'success', payload: user })
})

router.get('/:uid', (req, res) => {
  const { uid } = req.params;
  const uidNumber = parseInt(uid, 10);

  if (isNaN(uidNumber) || uidNumber <= 0) {
    const error = CustomError.createError({
      name: "Erro de parâmetro",
      cause: invalidParamErrorInfo (uid),
      message: "Parâmetro fornecido é inválido",
      code: EErrors.INVALID_PARAM
    })
    return res.send({ status: 'erro', payload: error })
  }

  res.send({ status: 'sucess', payload: 'Usuário'})
})

module.exports = router;