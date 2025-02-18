const numeros = [1, 2, 3, 4];
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma); // Saída: 10

// primeira iteracao
// acumulador = 0
// valorAtual = 1
// 1 + 0 = 1
// acumulador =  1

// segunda iteracao
// acumulador = 1
// valorAtual = 2
// 1 + 2 = 3
// acumulador =  3

// terceira iteracao
// acumulador = 3
// valorAtual = 3
// 3 + 3 = 6
// acumulador =  6

// terceira iteracao
// acumulador = 6
// valorAtual = 4
// 4 + 6 = 10
// acumulador =  10