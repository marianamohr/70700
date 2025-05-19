import { Command } from "commander";

const program = new Command();

program
  .option("-d", "Variavel para debug", false)
  .option("-p <port>", "Porta para rodar o servidor", 8080)
  .option("-mode <mode>", "Modo de trabalho", "dev")
  .option("-l", "Nivel de log", false)
  .requiredOption(
    "-u <user>",
    "Usuario para autenticar",
    "Nenhum usuario declarado"
  )
  .option("-1, --letters [...letters]", "specify letters");

program.parse();

console.log("options", program.opts());
console.log("remaining arguments", program.args);

export default program.opts();
// node commander.js -u mari -d  -p 3000 -mode dev -1 a b c
// app.lisen(program.opts().p, () => { console.log('server is running')})