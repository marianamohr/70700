const login = require("./login");

let testesAprovados = 0;

console.log("Teste 1 - Senha vazia");
let r1 = login("coderUser", "");
if (r1 === "Sem senha fornecida") {
  console.log("Passou no teste 1");
  testesAprovados++;
} else {
  console.log("Não passou no teste 1");
}

console.log("Teste 2 - Usuário vazio");
let r2 = login("", "123");
if (r2 === "Nenhum usuário fornecido") {
  console.log("Passou no teste 2");
  testesAprovados++;
} else {
  console.log("Não passou no teste 2");
}

console.log("Teste 3 - Senha incorreta");
let r3 = login("coderUser", "abc");
if (r3 === "Senha Errada") {
  console.log("Passou no teste 3");
  testesAprovados++;
} else {
  console.log("Não passou no teste 3");
}

console.log("Teste 4 - Usuário incorreto");
let r4 = login("userErrado", "123");
if (r4 === "Credenciais incorretas") {
  console.log("Passou no teste 4");
  testesAprovados++;
} else {
  console.log("Não passou no teste 4");
}

console.log("Teste 5 - Usuário e senha corretos");
let r5 = login("coderUser", "123");
if (r5 === "conectado") {
  console.log("Passou no teste 5");
  testesAprovados++;
} else {
  console.log("Não passou no teste 5");
}

console.log(`Total de testes aprovados: ${testesAprovados}/5`);
