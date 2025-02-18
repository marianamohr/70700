const nome = "       Mari      ";

console.log(nome);
console.log(nome.trim());

const array = [1, 2, 5, 4, 3, [1, 6, 8, 5], [56, [42, [65, 43], 1], 2, 3]];
           // [ 1, 2, 5, 4, 3, 1, 6, 8, 5, 56, [ 42, [ 65, 43 ], 1 ], 2, 3 ]
           // [ 1, 2, 5, 4, 3, 1, 6, 8, 5, 56, 42, [ 65, 43 ], 1, 2, 3 ]
           
console.log(array);
console.log(array.flat());
console.log(array.flat(2));
console.log(array.flat(3));
