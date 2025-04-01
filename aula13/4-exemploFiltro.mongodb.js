const database = 'lojas';
const collection = 'produtos';

// Use the specified database.
use(database);

// db.produtos.insertMany([ // Insere múltiplos documentos na coleção "produtos"
//   {
//     "name": "Camiseta",
//     "price": 19.99,
//     "qty": 20,
//     "year": 2022,
//     "sale": true,
//     "zipCode": "12345-678"
//   },
//   {
//     "name": "Calça Jeans",
//     "price": 49.99,
//     "qty": 10,
//     "year": 2023,
//     "sale": false,
//     "zipCode": "54321-876"
//   },
//   {
//     "name": "Tênis",
//     "price": 79.99,
//     "qty": 5,
//     "year": 2022,
//     "sale": true,
//     "zipCode": "98765-432"
//   },
//   {
//     "name": "Meias",
//     "price": 9.99,
//     "qty": 55,
//     "year": 2023,
//     "sale": false,
//     "zipCode": "13579-246"
//   },
//   {
//     "name": "Jaqueta",
//     "price": 129.99,
//     "qty": 15,
//     "year": 2022,
//     "sale": true,
//     "zipCode": "24680-135"
//   },
//   {
//     "name": "Boné",
//     "price": 14.99,
//     "qty": 30,
//     "year": 2023,
//     "sale": false,
//     "zipCode": "86420-975"
//   },
//   {
//     "name": "Cinto",
//     "price": 24.99,
//     "qty": 40,
//     "year": 2022,
//     "sale": true,
//     "zipCode": "75319-086"
//   },
//   {
//     "name": "Luvas",
//     "price": 11.99,
//     "qty": 60,
//     "year": 2023,
//     "sale": false,
//     "zipCode": "09876-543"
//   },
//   {
//     "name": "Cachecol",
//     "price": 29.99,
//     "qty": 25,
//     "year": 2022,
//     "sale": true,
//     "zipCode": "36925-814"
//   },
//   {
//     "name": "Chapéu",
//     "price": 34.99,
//     "qty": 35,
//     "year": 2023,
//     "sale": false,
//     "zipCode": "14703-692"
//   }
// ]);

// registros cujos nomes não são Luvas
db.produtos.find({ name: { $not: { $eq: "Luvas" } } });
db.produtos.find({ name: { $ne: "Chapéu" } });

// registros onde year é igual a 2021 ou 2023
db.produtos.find({ $or: [{ year: 2021 }, { year: 2023 }] });

// Encontrar documentos onde o campo "price" não é igual a 1.99 e o campo "sale" não é igual a true
db.produtos.find({ $nor: [{ price: 1.99 }, { sale: true }] });

// Encontrar documentos onde:
// 1. O campo "qty" é menor que 16 ou maior que 50
// 2. E o campo "sale" é igual a true ou o campo "price" é menor que 5
db.produtos.find({
  $and: [
    { $or: [{ qty: { $lt: 16 } }, { qty: { $gt: 50 } }] },
    { $or: [{ sale: true }, { price: { $lt: 5 } }] }
  ]
})

// Encontrar documentos onde o campo "zipCode" é do tipo string
db.produtos.find({ zipCode: { $type: "string" } })

db.produtos.find({ "zipCode": { $type: 2 } }) // 2 é o código para string, 1 para double, 16 para int

// price com 10% desconto
// db.produtos.find().forEach((doc) => {
//   doc.price = doc.price * 0.9;
//   db.produtos.save(doc);
// });

// retorna o documento antes de atualizar
const xablau = db.produtos.findOneAndUpdate(
  { name: "Cachecol" },
  { $set: { price: 19.00} }
)
print('xablau', xablau);

db.produtos.find({ name: "Cachecol" });

// retorna o documento após atualizar
const xablau2 = db.produtos.findOneAndUpdate(
  { name: "Cachecol" },
  { $set: { price: 35.00} },
  { returnDocument: "after" }
)
print('xablau2', xablau2);

// db.produtos.insertOne([ // Insere múltiplos documentos na coleção "produtos"
//   {
//     "name": "Camiseta",
//     "price": 19.99,
//     "qty": 20,
//     "year": 2022,
//     "sale": true,
//     "zipCode": "12345-678"
//   },
//   {
//     "name": "Calça Jeans",
//     "price": 49.99,
//     "qty": 10,
//     "year": 2023,
//     "sale": false,
//     "zipCode": "54321-876"
//   },
//   {
//     "name": "Tênis",
//     "price": 79.99,
//     "qty": 5,
//     "year": 2022,
//     "sale": true,
//     "zipCode": "98765-432"
//   },
//   {
//     "name": "Meias",
//     "price": 9.99,
//     "qty": 55,
//     "year": 2023,
//     "sale": false,
//     "zipCode": "13579-246"
//   },
//   {
//     "name": "Jaqueta",
//     "price": 129.99,
//     "qty": 15,
//     "year": 2022,
//     "sale": true,
//     "zipCode": "24680-135"
//   },
//   {
//     "name": "Boné",
//     "price": 14.99,
//     "qty": 30,
//     "year": 2023,
//     "sale": false,
//     "zipCode": "86420-975"
//   },
//   {
//     "name": "Cinto",
//     "price": 24.99,
//     "qty": 40,
//     "year": 2022,
//     "sale": true,
//     "zipCode": "75319-086"
//   },
//   {
//     "name": "Luvas",
//     "price": 11.99,
//     "qty": 60,
//     "year": 2023,
//     "sale": false,
//     "zipCode": "09876-543"
//   },
//   {
//     "name": "Cachecol",
//     "price": 29.99,
//     "qty": 25,
//     "year": 2022,
//     "sale": true,
//     "zipCode": "36925-814"
//   },
//   {
//     "name": "Chapéu",
//     "price": 34.99,
//     "qty": 35,
//     "year": 2023,
//     "sale": false,
//     "zipCode": "14703-692"
//   }
// ]);

db.produtos.find();

db.produtos.deleteOne({
  _id: ObjectId("67eb368706a0050d1f67998a")})