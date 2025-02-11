const array = [1, 2, 3, 4, 5];
// 0 ,
//console.log(array.length)
/*
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
  }
  */

const educadores = [
  {
    nome: "Mari",
    idade: 35,
    professor: true,
    tutor: false,
  },
  {
    nome: "Guilherme",
    idade: 34,
    professor: false,
    tutor: true,
  },
  {
    nome: "Raphael",
    idade: 16,
    professor: false,
    tutor: false,
  },
];

for (let index = 0; index < educadores.length; index++) {
  const educador = educadores[index];
  if (educador.professor === true) {
    console.log(`está é a idade ${educador.idade} do  ${educador.nome} `)
    console.log(`${educador.nome} é professor!`);
  } else if (educador.tutor === true) {
    console.log(`está é a idade ${educador.idade} do  ${educador.nome} `)
    console.log(`${educador.nome} é tutor!`);
  } else {
    console.log("teste educador.nome")
    console.log(`está é a idade ${educador.idade} do  ${educador.nome} `)
    console.log(`${educador.nome} Não é tutor nem professor!`);
  }

}
