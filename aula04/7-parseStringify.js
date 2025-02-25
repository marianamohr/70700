const fs = require("fs").promises;

const operacoesAsync = async () => {
  try {
    await fs.writeFile("./data/data.json", JSON.stringify([
      { name: "José" },
      { name: "Maria" },
      { name: "João" }
    ]));

    let resultado = await fs.readFile("./data/data.json", "utf-8");
    console.log("antes", typeof resultado, resultado);

    const resultadoParsed = JSON.parse(resultado);
    resultadoParsed.forEach(element => {
      console.log(element.name)
    });

    console.log("depois", typeof resultadoParsed, resultadoParsed);

    const newUser = { name: "Pedro" };
    resultadoParsed.push(newUser);
    console.log(resultadoParsed);

    const resultadoString = JSON.stringify(resultadoParsed);
    await fs.writeFile("./data/data.json", resultadoString);

  } catch (error) {
    console.log("Error", error);
  }
};

operacoesAsync();

// antes string[{ "name": "José" }, { "name": "Maria" }, { "name": "João" }]
// depois object[{ name: 'José' }, { name: 'Maria' }, { name: 'João' }]