const database = 'baseCRUD'
const collection = 'pets'

use(database);

// db.pets.insertMany([
//   { "nome": "Aquiles", "especie": "cachorro", "idade": 2 },
//   { "nome": "Morgana", "especie": "gato", "idade": 2 },
//   { "nome": "Cascudo", "especie": "peixe", "idade": 1 }
// ]);

db.pets.find();
db.pets.find({ especie: "cachorro" });
db.pets.countDocuments();

print('Quantidade de pets - estimada:', db.pets.estimatedDocumentCount());
db.pets.estimatedDocumentCount();
print('Quantidade de pets:', db.pets.countDocuments());
db.pets.countDocuments();