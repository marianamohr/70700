const gerarNumAleatorio = () => {
  const numeros = Math.floor(Math.random() * 20) + 1;

  return numeros
};

const geraLista = (limit) => {
  const array = new Array(limit);
  for (let i = 0; i < limit; i++) {
    array[i] = gerarNumAleatorio();
  }
  console.log(array);
  return array;
}

const contaNumeros = (array) => { // [1, 2, 3]
  const numeros = {}; 

  array.forEach((num) => {

    console.log(num, numeros[num]);
    
    if (!numeros[num]) {
      numeros[num] = 1
    } else {
      numeros[num] += 1;
    }
  })

  return numeros
}

const main = () => {
  const array = geraLista(10);

  const objeto = contaNumeros(array);

  console.log(objeto);
}

main()