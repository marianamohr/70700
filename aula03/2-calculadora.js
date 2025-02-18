const soma = (num1, num2) => num1 + num2;
const subtracao = (num1, num2) => num1 - num2;
const divisao = (num1, num2) => num1 / num2;
const multiplicacao = (num1, num2) => num1 * num2;

const calculadora = (num1, num2, operacao) => {
  console.log(`Estamos executando uma: ${operacao.name}`);
  return operacao(num1, num2);
};

console.log(calculadora(1, 1, soma)); // 2
console.log(calculadora(1, 1, subtracao)); // 0
console.log(calculadora(10, 2, divisao)); // 5
console.log(calculadora(2, 2, multiplicacao)); // 4


