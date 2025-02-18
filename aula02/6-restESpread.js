const educador = {
  nome: "Mari",
  cpf: "542.457.215-00",
  idade: 34,
  professor: true,
  tutor: false,
  compartilharEMail: false,
  tamanho: 181
};

const enderecoEducador = {
  cidade: "Joinville",
  pais: "Brasil",
};

//console.log(educador.nome)

//const key = 'nome'
//console.log(educador[key])
////const { nome } = educador;
//console.log(educador);
//console.log(nome);


/*
const newEducador = {
  nome: educador.nome,
  cpf: educador.cpf,
  idade: educador.idade,
  professor: educador.professor,
  tutor: educador.tutor,
  compartilharEMail: educador.compartilharEMail,
  tamanho: educador.tamanho,
  cidade: enderecoEducador.cidade,
  pais: enderecoEducador.pais
}*/
// spread
let educadorCompleto =  {...educador , ...enderecoEducador};
//console.log("AAAA",educadorCompleto);

// rest
 const { cpf, cidade, ...educardorSemCpf } = educadorCompleto;

 ///const cpf = educadorCompleto.cpf
/*
 const newEducador = {
  nome: educador.nome,
  idade: educador.idade,
  professor: educador.professor,
  tutor: educador.tutor,
  compartilharEMail: educador.compartilharEMail,
  tamanho: educador.tamanho,
  cidade: enderecoEducador.cidade,
  pais: enderecoEducador.pais
}*/

 console.log("cpf", cpf);
 //552.***.***.***-50
 console.log("rest", educardorSemCpf);
 console.log("educador", educadorCompleto);

