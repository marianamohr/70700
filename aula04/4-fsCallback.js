const fs = require("fs");

fs.writeFile(
  "./data/exemploCallback.txt",
  "Hello Coders! Virei um arquivo!",
  (err) => {
    if (err) {
      return console.log("Errouuuu", err);
    }
    // 1
    fs.readFile("./data/exemploCallback.txt", "utf-8", (err, resultado) => {
      // 1, 2
      if (err) {
        return console.log("Errouuuu");
      }
      console.log(resultado);
      fs.appendFile("./data/exemploCallback.txt", " Mais conteúdo! ", (err) => {
        // 1, 2, 3
        if (err) {
          return console.log("Errouuuu");
        }
        fs.readFile("./data/exemploCallback.txt", "utf-8", (err, resultado) => {
          // 1,2,3,4
          if (err) {
            return console.log("Errouuuu");
          }
          fs.unlink("./data/exemploCallback.txt", (err) => {
            // 1,2,3,4,5
            if (err) {
              return console.log("5 - Não foi possível excluir o arquivo");
            }
            console.log("Arquivo excluído com sucesso!");
          });
          console.log(resultado);
        });
      });
    });
  }
);