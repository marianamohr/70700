const divisao = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (divisor === 0) {
        reject("Não é possível dividir por zero");
      } else {
        resolve(dividendo / divisor);
      }
    }, 3000);
  });
};

const ehPar = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve(`${num} é Par`);
      } else {
        reject(`${num} não é Par`);
      }
    }, 2000);
  });
};
// 1.5
/*
 divisao(4, 2)
  .then((result) => {
    console.log(".then do divisao: ", result);
    ehPar(result)
      .then((result) => {
        console.log(".then do ehPar: ", result);
      })
      .catch((error) => {
        console.log(".catch do eh par: ", error);
      });
  })
  .catch((error) => {
    console.log(".cath do dividir: ", error);
  });
*/
const main = async () => {
  try {
  const valor1 = await divisao(5, 2);
  console.log("Resultado da div", valor1);
  const result = await ehPar(valor1);
  console.log("é par: ", result);
   } catch (error) {
    console.log("error com await: ", error);
   }
};

main();
