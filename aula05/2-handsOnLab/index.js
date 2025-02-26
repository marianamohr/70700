const fs = require('fs').promises;
const crypto = require('crypto');

const lerArquivo = async() => {
  try {
    const result = await fs.readFile('./data/usuarios.json', 'utf-8');
    const resultParsed = await JSON.parse(result);
    return resultParsed;
  } catch (error) {
    console.log(error);
  }
}

const gravarArquivo = async(data) => {
  try {
    const dataToSave = JSON.stringify(data, null, 2);
    await fs.writeFile('./data/usuarios.json', dataToSave)
  } catch (error) {
    console.log(error);
  }
}

const salvarUsuario = async(usuario) => {
  try {
    const listUsers = await lerArquivo();
    console.log(listUsers);

    usuario.password = crypto
      .createHash("sha256")
      .update(usuario.password)
      .digest('hex');

    console.log('senha hasheada: ', usuario.password);

    listUsers.push(usuario)
    await gravarArquivo(listUsers);
  } catch (error) {
    console.log(error);
  }
}

const validarUsuario = async(usuario) => {
  const listUsers = await lerArquivo();

  console.log('Senha a ser validada antes hash: ', usuario.password);

  const senhaAValidar = crypto
    .createHash("sha256")
    .update(usuario.password)
    .digest('hex');
  
  const userValidated = listUsers.find((user) => {
    return user.name === usuario.name && user.password === senhaAValidar
  })

  console.log('Senha a ser validada após hash: ', senhaAValidar);

  if (userValidated) {
    console.log('Usuário Logado!');
  } else {
    console.log('Usuário não logado!');
  }
}

const main = async() => {
  // await salvarUsuario({"name": "João", "password": "teste"});

  validarUsuario({ name: "Alessandra", password: "batatinha"})
}

main();