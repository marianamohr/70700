const database = 'coder'
const collection = 'users'

use(database);

// db.users.insertMany([
//   { "nome": "Paulo", "idade": 25 },
//   { "nome": "João", "idade": 22 },
//   { "nome": "Lúcia", "idade": 25 },
//   { "nome": "João", "idade": 29 },
//   { "nome": "Fred", "idade": 35 },
// ]);

db.users.find();
db.users.findOne({ nome: "João" });
db.users.find({ nome: "João" });

db.users.estimatedDocumentCount();
db.users.count(); // deprecated
db.users.countDocuments();
db.users.countDocuments({ nome: "João" });

db.users.find({ idade: 25 });

// db.users.insertMany([
//   { "nome": "Paulo", "idade": 25, "sexo": "M" },
//   { "nome": "João", "idade": 22, "sexo": "M" },
//   { "nome": "Lúcia", "idade": 25, "sexo": "F" },
//   { "nome": "João", "idade": 29, "sexo": "M" },
//   { "nome": "Fred", "idade": 35, "sexo": "M" },
//   { "nome": "Maria", "idade": 25, "sexo": "F" },
//   { "nome": "Ana", "idade": 25, "sexo": "F" },
// ]);

db.users.find();
db.users.find({ sexo: "M" });
db.users.find({ sexo: "F" }, { nome: 1, _id: 0 });

db.users.find({ nome: "João" }, { nome: true, idade: 1, _id: 0 }); // pode ser tanto 1 ou 0 quanto true ou false

db.users.find({ nome: 'João' }).sort({ idade: 1 });

db.users.find().sort({ nome: -1, idade: -1 });

db.users.find({}, { _id: 0, nome: 1 }).sort({ idade: -1 }).limit(3)

db.users.find({}, { _id: 0, nome: 1 }).sort({ idade: -1, nome: -1 }).limit(3)

db.users.find({}, { _id: 0, nome: 1 }).sort({ idade: -1 }).limit(3).skip(2)