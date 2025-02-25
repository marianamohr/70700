// // OPERAÇÃO SÍNCRONA
// console.log("Tarefa Iniciada!");
// console.log("Executando...");
// console.log("Continuação...");
// console.log("Tarefa Terminada!");

// OPERAÇÃO ASSÍNCRONA
const temporizador = (callback) => {
  setTimeout(() => {
    callback();
    console.timeEnd()
  }, 5000);
};
console.time()
let operacao = () => console.log("Executando...");

console.log("Tarefa Iniciada!");
temporizador(operacao);
console.log("Tarefa Terminada!"); 