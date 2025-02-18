const educadores = [
  {
    nome: "Mari",
    idade: 34,
    professor: true,
    tutor: false,
    liguagem: "JS",
  },
  {
    nome: "Ana",
    idade: 34,
    professor: true,
    tutor: false,
    liguagem: "JS",
  },
  {
    nome: "Jhony",
    idade: 22,
    professor: false,
    tutor: true,
    liguagem: "dotNet",
  },
  {
    nome: "Marta",
    idade: 34,
    professor: true,
    tutor: false,
    liguagem: "Go",
  },
  {
    nome: "thiago",
    idade: 34,
    professor: false,
    tutor: true,
    liguagem: "JS",
  },
];

// um professor que saiba JS
// retorna o primeiro match
const professorFind = educadores.find(
  (educador) => {
    return educador.professor === true && educador.liguagem === "JS";
  }
);

console.log(professorFind);

// retorna um array com todos que satisfazem o filtro
const professorFilter = educadores.filter(educador => educador.professor === true && educador.liguagem === "GO");

console.log(professorFilter);
