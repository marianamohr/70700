# Aula47 - Sistema de Pedidos com Kafka e Redis

Este projeto implementa um sistema de pedidos utilizando Kafka para mensageria e Redis para armazenamento de dados. A aplicação é dividida em dois serviços principais: um produtor de pedidos e um consumidor que gera faturas baseadas nos pedidos recebidos.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- Node.js (versão recomendada: 14.x ou superior)
- Docker e Docker Compose
- Kafka e Zookeeper (Recomendamos o uso de Docker para facilitar a configuração)

## Configuração

1. Clone o repositório para sua máquina local:

```sh
git clone <url-do-repositorio>
````

2. Navegue até o diretório do projeto:

```
cd aula47
```
 3. Instale as dependências do projeto:
```
npm install
```

### Subindo as Dependências com Docker
Este projeto utiliza Kafka e Redis, que podem ser facilmente configurados e executados usando Docker Compose.

1. Para iniciar o Kafka e o Redis, execute o seguinte comando na raiz do projeto:
```
docker-compose up -d
```

Isso irá subir os containers necessários para o funcionamento da aplicação.

### Executando a Aplicação
A aplicação é dividida em dois serviços principais: o serviço de produção de pedidos e o serviço de consumo que gera faturas.

Iniciando a API
Para iniciar a API, execute:

```
npm run start:app
```

Iniciando o Serviço Consumidor e que salva os dados no Redis
Para iniciar o serviço produtor, execute:

```
npm run start:consumer
```