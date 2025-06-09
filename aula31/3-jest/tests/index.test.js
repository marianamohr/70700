const calcularImpostos = require("../index");

describe("Função calcularImpostos", () => {
  test("Deve calcular o imposto corretamente para uma nota fiscal válida", () => {
    // Arrange
    const notaFiscal = {
      valorTotal: 1000,
      aliquotaImposto: 16,
    };

    // Act
    const resultado = calcularImpostos(notaFiscal);

    // Assert
    expect(resultado.valorImposto).toBeCloseTo(160);
    expect(resultado.valorComImposto).toBeCloseTo(1160);
  });

  test("Deve lançar erro com aliquotaImposto ausente", () => {
    // arrange
    const notaFiscalInvalida = {
      valorTotal: 1000,
    };
    // act assert
    expect(() => calcularImpostos(notaFiscalInvalida)).toThrow(
      "A nota fiscal deve ter valorTotal e aliquotaImposto."
    );
  });

  test("Deve retornar 0 de imposto quando a aliquota é 0%", () => {
    // arrange
    const notaFiscal = {
      valorTotal: 1000,
      aliquotaImposto: 0,
    };

    // act
    const resultado = calcularImpostos(notaFiscal);

    // assert
    expect(resultado.valorImposto).toBe(0);
    expect(resultado.valorComImposto).toBe.Equal
  });
});
