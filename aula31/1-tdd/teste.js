const soma = require("./index");

let testesAprovados = 0;

console.log("Teste 1 - A FUNCAO DEVE RETORNAR NULL");
let result1 = soma("2", 2);

if (result1 === null) {
  console.log("Passou no teste 1");
  testesAprovados++;
} else {
  console.log("Não passou no teste 1");
}

console.log("Teste 2 - Deve retornar zero de nenhum parametro for passado");
let result2 = soma();

if (result2 === 0) {
  console.log("Passou no teste 2");
  testesAprovados++;
} else {
  console.log("Não passou no teste 2");
}

console.log("Teste 3 - Sucesso");
let result3 = soma(2, 3);
console.log("aaa",result3)
if (result3 === 5) {
  console.log("Passou no teste 3");
  testesAprovados++;
} else {
  console.log("Não passou no teste 3");
}

console.log(
  "Teste 4 - a função deve ser capaz de fazer a soma com qualquer conjunto de numeros"
);
let result4 = soma(1, 2, 3, 4, 5);

if (result4 === 15) {
  console.log("Passou no teste 4");
  testesAprovados++;
} else {
  console.log("Não passou no teste 4");
}

console.log(`Total de testes aprovados: ${testesAprovados}/4`);