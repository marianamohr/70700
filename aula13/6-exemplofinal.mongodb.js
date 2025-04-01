const database = 'escola'
const collection = 'alunos'

use(database);

db.alunos.find();

db.alunos.updateOne({ nome: "Frederico" },
  { $set: { idade: 36 } }
)

// listar alunos até 35 anos
db.alunos.find({ idade: { $lte: 35 } }).sort({ idade: -1 })

db.alunos.updateMany({ idade: { $in: [25, 26] } }, { $inc: { idade: 3 } })

db.alunos.find({ idade: { $lt: 28 } }).sort({ idade: -1 })

db.alunos.find().sort({ idade: -1 }).limit(3).skip(1)

db.alunos.updateMany(
  { $set: { "idade": 22 } }
);

db.alunos.deleteMany({ sexo: "F" });

db.alunos.deleteMany({ nome: "Aluno teste" })

db.alunos.deleteMany({}); // sem filtro, deleta TUDO

