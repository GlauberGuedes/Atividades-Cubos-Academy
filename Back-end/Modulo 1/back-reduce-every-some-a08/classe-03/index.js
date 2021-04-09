const numeros = [1, 98.65, -76, 0, 82, 19, 5, 60, 44];

// const maiorValorInteiro = numeros.reduce((acc, item) => {
// const ehInteiro = item % 1 === 0;
// if(ehInteiro && item > acc) {
//     acc = item;
// }
// return acc;
// });
// console.log(maiorValorInteiro);

const maiorValorInteiro = numeros.reduce((acc, item) => Number.isInteger(item) && item > acc ? item : acc);
console.log(maiorValorInteiro);