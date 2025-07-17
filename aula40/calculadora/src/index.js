const soma = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    return "operação desnecessaria";
  }

  if (num1 === 0 || num2 === 0) {
    return "operação desnecessaria";
  }
  const soma = num1 + num2;
  if (soma < 0) {
    return "deve retornar somente resultados positivos";
  } else {
    return soma;
  }
};

const subtracao = (num1, num2) => {
  if (num1 === 0 || num2 === 0) {
    return "operação desnecessaria";
  }
  const subtracao = num1 - num2;
  if (subtracao < 0) {
    return "deve retornar somente resultados positivos";
  } else {
    return subtracao;
  }
};

const multiplicacao = (num1, num2) => {
  if (num1 < 0 || num2 < 0) {
    return "Fatores devem ser positivos";
  }
  const mult = num1 * num2;
  if (mult < 0) {
    return "deve retornar somente resultados positivos";
  } else {
    return mult;
  }
};

const divisao = (num1, num2) => {
  if (num1 < 0 || num2 < 0) {
    return "Fatores devem ser positivos";
  }
  const div = num1 / num2;
  if (div < 0) {
    return "deve retornar somente resultados positivos";
  } else {
    return div;
  }
};

const calculadora = (num1, num2, operacao) => {
  console.log(`Estamos executando uma: ${operacao.name}`);
  return operacao(num1, num2);
};
// console.log(calculadora("$", 1, soma)); // 2
/*
console.log(calculadora(1, 1, subtracao)); // 0
console.log(calculadora(10, 2, divisao)); // 5
console.log(calculadora(2, 2, multiplicacao)); // 4
*/
module.exports = {
  calculadora,
  soma,
  subtracao,
  multiplicacao,
  divisao,
};
