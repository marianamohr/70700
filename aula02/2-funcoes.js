const a = 2;
const b = 2;

const c = a + b;
//console.log(c);

// Declaração "Normal"
function soma(a, b) {
  let resultado;
  resultado = a + b;
  return resultado;
}

////console.log(soma(8, 10));
//console.log(soma(4, 4));

const numeros = [
  { a: 1, b: 3 },
  { a: 2, b: 4 },
  { a: 5, b: 1 },
  { a: 4, b: 1 },
];

for (const num of numeros) {
  // console.log(`${num.a} + ${num.b} = ${soma(num.a, num.b)}`);
}

// Arrow Function
const diminuir = (a, b) => {
  //console.log(a, b);
  return a - b;
};

// return implicito
const diminuir2 = (a, b) => a - b;

let calculo = diminuir(4, 2);

//console.log(calculo)

calculo = diminuir2(2, 1);

//console.log(calculo)

for (const num of numeros) {
  //console.log(`${num.a} - ${num.b} = ${diminuir(num.a, num.b)}`);
}
