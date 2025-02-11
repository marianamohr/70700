const numero = 10;

let nome = "Mari";
//console.log(nome)
nome = "Mariana";
//console.log(nome)
const bool = true; // false

const professor = {
  nome: "Mari",
  idade: 35,
  professor: true,
  tutor: false,
};

//console.log(professor.idade)

//     index    0  1  2  3  4
const array =  [1, 2, 3, 4, 5];
// console.log(array.at(-1))

const educadores = [
  {
    nome: "Mari",
    idade: 35,
    professor: true, // index 0
    tutor: false,
  },
  {
    nome: "Guilherme",
    idade: 34,
    professor: false, // index 1
    tutor: true,
  },
];

//console.log(educadores[0]);
console.log(educadores[0].nome)
educadores[0].nome = "Mariana"
educadores[0] = 10
console.log(educadores[0].nome)
