const xablau = 2;
const pi = 3.14;

function potenciaDeDois(a) {
  if (a == undefined) {
    return "Deu zica";
  }
  const potencia = 2;
  console.log(potencia);
  return Math.pow(a, potencia);
}

function potenciaDeTres(a) {
  const potencia = 3;
  console.log(potencia);
  return Math.pow(a, potencia);
}

const teste = 2;

//console.log(potenciaDeDois(teste));
//console.log(potencia)
//console.log(potenciaDeTres(3));

function xablau1() {
  const i = 1;
  const j = 2;
  if (true) {
    const h = 3;
   //  h = 4
    console.log(i, j, h);
    if (true) {
      console.log('dentro do 2 if', i, j, h);
    }
  }
  console.log(i, j, h);
}
console.log(i, j, h);
xablau1()