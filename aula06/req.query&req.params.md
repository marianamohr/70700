## Diferença entre req.params e req.query em Express.js

Em Express.js, `req.params` e `req.query` são usados para acessar dados da requisição, mas de formas diferentes:

### req.params (Parâmetros de Rota)

- **O que são:** Parâmetros dinâmicos que fazem parte da própria URL, usados para identificar recursos específicos.
- **Como usar:** Definidos na rota com `:nome_do_parametro` e acessados com `req.params.nome_do_parametro`.
- **Exemplo:**

  ```javascript
  app.get('/usuarios/:id', (req, res) => {
    const usuarioId = req.params.id;
    res.send(`Detalhes do usuário ${usuarioId}`);
  });

Ao acessar /usuarios/123, req.params.id será "123".

### req.query (Parâmetros de Consulta)
- **O que são:** Parâmetros após ? na URL, usados para filtros, ordenação, paginação, etc.
- **Como usar:** Definidos como chave=valor após ? e acessados com req.query.chave.
- **Exemplo:**

  ```javascript
  app.get('/produtos', (req, res) => {
    const categoria = req.query.categoria;
    res.send(`Produtos da categoria ${categoria}`);
  });

Ao acessar /produtos?categoria=eletronicos, req.query.categoria será "eletronicos".

## Resumo das Diferenças

| Característica         | `req.params`                   | `req.query`                         |
|------------------------|--------------------------------|-------------------------------------|
| **Localização na URL** | Caminho da URL                 | Após `?` na URL                     |
| **Uso comum**          | Recursos específicos           | Filtros, ordenação, paginação, etc. |
| **Definição na rota**  | `:nome_do_parametro`           | Não definidos na rota               |
| **Acesso**             | `req.params.nome_do_parametro` | `req.query.chave`                   |
| **Opcionais**          | Geralmente obrigatórios        | Opcionais                           |
