const path = require('path');
const fs = require('fs').promises;

class ManagerProducts {
  constructor(filePath) {
    this.path = filePath;
    this.#criarArquivo(); // ✅ Chama automaticamente ao instanciar a classe
  }

  async #criarArquivo() {
    try {
      const dir = path.dirname(this.path);
      await fs.mkdir(dir, { recursive: true });

      await fs.access(this.path);
    } catch (err) {
      console.log('Arquivo não encontrado. Criando novo...');
      await fs.writeFile(this.path, '[]'); // Criar arquivo JSON vazio
    }
  }

  async #lerArquivo() {
    try {
      try {
        await fs.access(this.path);
      } catch {
        await this.#criarArquivo();
      }

      let resultado = await fs.readFile(this.path, 'utf-8');

      return resultado.trim() ? JSON.parse(resultado) : [];
    } catch (err) {
      console.error('Erro ao ler o arquivo:', err.message);
      return [];
    }
  }

  async #escreverArquivo(data) {
    await fs.writeFile(this.path, JSON.stringify(data, null, 2));
  }

  async consultaProduto() {
    return await this.#lerArquivo();
  }

  async criarProduto(nome, preco, categoria) {
    let resultado = await this.#lerArquivo();
    resultado.push({ nome, preco, categoria });

    await this.#escreverArquivo(resultado);
  }

  async consultaProdutoNome(nome) {
    const resultado = await this.#lerArquivo();
    return resultado.find((prd) => prd.nome === nome);
  }
}

// Executando a classe
const main = async () => {
  const productManager = new ManagerProducts('./data/products.json'); // ✅ Criará o arquivo automaticamente

  await productManager.criarProduto("Café", "35.00", "Item essencial");
  console.log(await productManager.consultaProduto());

  await productManager.criarProduto("Pão", "10.00", "Item de café da manhã");
  console.log(await productManager.consultaProduto());

  console.log(await productManager.consultaProdutoNome('Café'));
};

main();
