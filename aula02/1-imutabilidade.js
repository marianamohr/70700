let nome = "Mari";
//console.log(nome)
nome = "Jhony";
//console.log(nome)

const educador = {
  nome: "Mari",
  idade: 34,
  professor: true,
  tutor: false,
};

console.log(educador.nome);

educador.nome = "Mari Mohr";

console.log(educador.nome);

const educadores = [
  {
    nome: "Mari",
    idade: 34, // 0
    professor: true,
    tutor: false,
  },
  {
    nome: "Jhony", //1
    idade: 22,
    professor: false,
    tutor: true,
  },
];

console.log(educadores);

const newProf = {
  nome: "Mari Mohr",
  idade: 35,
  professor: true,
  tutor: false,
};

// educadores[0] = newProf;

console.log(educadores);


educadores[0] = 1

educadores[1].nome = "jhony";

 console.log(educadores);

// educador = newProf

//educadores = []


