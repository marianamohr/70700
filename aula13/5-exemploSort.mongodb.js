const database = 'escola'
const collection = 'alunos'

use(database);

// db.alunos.insertMany([
//   { "nome": "Mateus", "idade": 25 },
//   { "nome": "Maria", "idade": 22 },
//   { "nome": "Joana", "idade": 25 },
//   { "nome": "José", "idade": 29 },
//   { "nome": "Frederico", "idade": 35 },
// ]);

db.alunos.find();

// ordem decrescente
db.alunos.find().sort({ nome: -1 });

// ordem crescente, só os nomes
db.alunos.find({}, { nome: 1, _id: 0 }).sort({ nome: 1 });

// aluno mais jovem
db.alunos.find({ idade: { $exists: 1 } }).sort({ idade: 1 }).limit(1);

// aluno mais velho
db.alunos.find({ idade: { $exists: 1 } }).sort({ idade: -1 }).limit(1);

// segundo aluno mais jovem
db.alunos.find({ idade: { $exists: 1 } }).sort({ idade: 1 }).limit(1).skip(1);

db.clientes.find().sort({ idade: 1 })

// nomes por idade decrescente
db.alunos.find({}, { _id: 0, nome: 1 }).sort({ idade: -1 });

// nomes por idade crescente
db.alunos.find({}, { _id: 0, nome: 1, idade: 1 }).sort({ idade: 1, nome: 1 });

db.alunos.find().sort({ idade: 1, nome: 1 }).skip(2).limit(1)

// alunos chamados João
db.alunos.find({ nome: 'João' })

// alunos chamados João com 29 anos
db.alunos.find({ nome: 'João', idade: 29 })

// alunos chamados Juan ou Lúcia
db.alunos.find({ nome: { $in: ['Juan', 'Lúcia'] } })

// alunos com 25 anos
db.alunos.find({ idade: { $eq: 25 } })

// alunos com idade diferente de 25
db.alunos.find({ idade: { $ne: 25 } })

// alunos com idade maior que 25
db.alunos.find({ idade: { $gt: 25 } })

// alunos com idade menor que 25
db.alunos.find({ idade: { $lte: 25 } })

// alunos com idade entre 26 e 35
db.alunos.find({ idade: { $gte: 26, $lte: 35 } })

// atualizar idade de Fred para 36
db.alunos.updateOne({ nome: 'Fred' }, { $set: { idade: 36 } })

// atualizar idade de João para 30
db.alunos.updateOne({ nome: 'João' }, { $set: { idade: 30 } })

// atualizar idade de todos os Joãos para 30
db.alunos.updateMany({ nome: 'João' }, { $set: { idade: 30 } })

// atualizar idade de todos os alunos com 25 anos para 26 anos
db.alunos.updateMany({ idade: 25 }, { $set: { idade: 26 } })

// contar todos os alunos
db.alunos.countDocuments({})

// deletar todos os alunos chamados João
db.alunos.deleteMany({ nome: 'João' })

// deletar todos os documentos que ficaram com algum valor
db.alunos.deleteMany({})