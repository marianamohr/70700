function login(user, password) {
  const correctUser = "coderUser";
  const correctPass = "123";

  if (!password) return "Sem senha fornecida";
  if (!user) return "Nenhum usuário fornecido";

  /*
    if (user !== correctUser && password === correctPassword) return "Credenciais incorretas";
  if (user === correctUser && password !== correctPassword) return "Senha Errada";
  if (user !== correctUser && password !== correctPassword) return "Credenciais incorretas";
  */
  if (user === correctUser) {
    if (password !== correctPass) {
      return "Senha Errada";
    } else {
      return "conectado";
    }
  }
  return "Credenciais incorretas";
}

module.exports = login;
