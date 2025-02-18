---
markmap:
  maxWidth: 250
  initialExpandLevel: 20
---

# Java

##  Classes



## Polimorfismo

### Relações
#### Agregação
##### Definição: a classe que reaproveita o comportamento de outra pode existir de forma independente. Isso indica que, se a classe que cede o comportamento for excluída, a que reaproveita continua existindo. 
#### Composição
##### Definição: a classe que reaproveita o comportamento da outra não pode existir caso a dona do comportamento seja excluída.

### Overload  
#### Definição: É a possibilidade de uma classe tenha vários métodos com o mesmo nome, mas com diferentes (assinatura) parâmetros de entrada. Isso é útil quando você deseja ter funcionalidades semelhantes, mas com comportamentos diferentes, em uma classe. Isso permite que você use um nome de método significativo e fácil de lembrar, evitando a necessidade de criar nomes diferentes para métodos que realizam tarefas semelhantes. 

### Overrrite  
#### Definição: É a possibilidade de sobrescrever/alterar um método da classe pai, na classe filho. 

####  Classe Abstract -> É usado para criar um classe que não pode ser instanciada, ou seja, ela serve somente como base para outras classes que a estendem.

####  Método Abstract -> é um método declarado sem uma implementação. Ele fornece apenas a assinatura do método, sem o corpo. Os métodos abstratos são declarados na classe abstrata e devem ser implementados pelas classes filhas.Crio a obrigatoriedade do desenvolvimento desse metodo na classe filha.

## Encapsulamento 
- é a  possibilidade de de utilizar um código sem entender a sua implementação 

## Modificadores

- **Private**: 
 Torna o metodo/atributo privado, acessivel somente pela propria classe 
- **Public**:
 Torna o metodo/atributo acessivel por qualquer outra classe, independentemente do pacote em que ela esteja. Por exemplo, se você declarar uma classe ou um método como público, qualquer classe poderá acessá-lo.
- **protected**:
permite visibilidade, dos seus atributos e métodos, tanto por classes do mesmo pacote, sem necessidade de herança, ou por classes de pacotes diferentes, com necessidade de herança.
- **default**:
o acesso é restrito ao pacote em que a classe está localizada. Os membros sem modificador podem ser acessados por outras classes que estão no mesmo pacote, mas não podem ser acessados por classes de pacotes diferentes.


## Herança

- SuperClasse
-> Classe pai, de onde possivelmente podem surgir outras SubClasses
-  SubClasse
-> Classe que herdou(extends) as caracteristicas da classe Pai
- super() 
-> Invocado no construtor para habilitar os metodos padrões da classe Object. Se não for definida uma classe pai, por default a classe pai é a object.

## Tipos

-  String
-> Textos
-  int 
-> Números
-  void 
-> nulo normalmente usado em função


## Métodos
- Getters
-> Usado para pegar dados de atributos privados
- Setters
-> Usado para alterar o valor de um atributo do meu objeto


## Interfaces


## Atributos








