const database = 'escola'
const collection = 'alunos'

use(database);

// db.alunos.insertMany([
//   {
//     "nome": "Ana",
//     "sobrenome": "Silva",
//     "curso": "Matemática",
//     "idade": 21,
//     "correspondência": "ana.silva@example.com",
//     "sexo": "F"
//   },
//   {
//     "nome": "Bruno",
//     "sobrenome": "Souza",
//     "curso": "Física",
//     "idade": 23,
//     "correspondência": "bruno.souza@example.com",
//     "sexo": "M"
//   },
//   {
//     "nome": "Carla",
//     "sobrenome": "Pereira",
//     "curso": "Química",
//     "idade": 22,
//     "correspondência": "carla.pereira@example.com",
//     "sexo": "F"
//   },
//   {
//     "nome": "Diego",
//     "sobrenome": "Almeida",
//     "curso": "Biologia",
//     "idade": 24,
//     "correspondência": "diego.almeida@example.com",
//     "sexo": "M"
//   },
//   {
//     "nome": "Elisa",
//     "sobrenome": "Costa",
//     "curso": "História",
//     "idade": 20,
//     "correspondência": "elisa.costa@example.com",
//     "sexo": "F"
//   },
//   {
//     "nome": "Alessandra",
//     "sobrenome": "Rezende",
//     "curso": "Matemática",
//     "idade": 21,
//     "correspondência": "ale.rezende@example.com",
//     "sexo": "F"
//   },
// ]);

// db.alunos.insertOne({
//   "nome": "Aluno teste",
//   "sobrenome": "teste",
//   "curso": "Física",
// })

db.alunos.find();
db.alunos.find({ sexo: "M" })
db.alunos.find({ curso: "Física" })
db.alunos.countDocuments({ sexo: "F" })
db.alunos.countDocuments({ sexo: "M" })

db.alunos.find({ nome: "Alessandra" }).pretty();

db.alunos.findOne({ nome: "Alessandra" });

db.alunos.find({ sexo: "H" });

db.alunos.estimatedDocumentCount();

db.alunos.countDocuments();

db.alunos.countDocuments({ sexo: "F" });

db.alunos.countDocuments({ sexo: "M" });

db.alunos.countDocuments({ sexo: { $exists: 0 } })

db.alunos.find({ sexo: { $exists: 0 } }); // serve tanto 1 e 0 quanto false e true