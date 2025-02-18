const restrictedValues = ["desativado", "NA", "cartao", "xablau"];

const ApprovedBrand = ["Adidas", "Nike"];

const productList = [
  { id: 1, nome: "Tenis", marca: "Adidas", categoria: "NA" },
  { id: 2, nome: "Tenis", marca: "Nike", categoria: "corrida" },
  { id: 3, nome: "Tenis", marca: "Puma", categoria: "NA" },
  { id: 1, nome: "Camiseta", marca: "Fila", categoria: "Manga Curta" },
];

const marca = "Nike"

const xablau = ApprovedBrand.includes(marca)

console.log(xablau)
/*
const filtredList = productList.filter(
  (item) => !restrictedValues.includes(item.categoria) && ApprovedBrand.includes(item.marca)
);


console.log(filtredList);
*/