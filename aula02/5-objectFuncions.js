const educador = {
  nome: "Mari",
  idade: 34,
  professor: true,
  tutor: false,
};

// tranforma em Array
const chavesEValor = Object.entries(educador);
console.log(chavesEValor);
// pega só as chaves
const chaves = Object.keys(educador);
console.log(chaves);
// pega só os valoes
const valores = Object.values(educador);
console.log(valores);
