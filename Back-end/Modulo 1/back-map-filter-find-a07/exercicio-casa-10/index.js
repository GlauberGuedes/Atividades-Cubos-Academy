const notas = [6, 20, 33, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33];

// const arraynotas = [];
// notas.forEach(item => {
// if(!arraynotas.find(x => x === item)) {
//     arraynotas.push(item);
// }
// });
// console.log(arraynotas);

const arrayNova = [];
notas.forEach(nota => {
    const verificacao = arrayNova.find(x => x === nota);
    if(!verificacao) {
        arrayNova.push(nota);
    }
});
console.log(arrayNova);

