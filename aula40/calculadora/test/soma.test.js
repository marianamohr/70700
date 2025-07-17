const { soma } = require("../src/index");
const assert = require("assert");

describe("Soma", () => {
  describe("Sucesso", () => {
    it("quando 2 + 2 = 4", async () => {
      // A = Arrange
      const num1 = 2;
      const num2 = 2;
      const resultadoEsperado = 4;

      // A = Act
      const resultado = soma(num1, num2);

      // A = Assert
      assert.strictEqual(resultado, resultadoEsperado);
    });
  });
   describe("Falha", () => {
    it("deve retornar erro quando um dos valores for 0", async () => {
      // A = Arrange
      // input
      const num1 = 0;
      const num2 = 2;
      // output
      const resultadoEsperado = "operação desnecessaria";

      // A = Act
      const resultado = soma(num1, num2);

      // A = Assert
      assert.strictEqual(resultado, resultadoEsperado);
    });
     it("deve retornar erro quando um dos valores for $", async () => {
      // A = Arrange
      // input
      const num1 = "$";
      const num2 = 2;
      // output
      const resultadoEsperado = "operação desnecessaria";

      // A = Act
      const resultado = soma(num1, num2);

      // A = Assert
      assert.strictEqual(resultado, resultadoEsperado);
    });
  });
});
