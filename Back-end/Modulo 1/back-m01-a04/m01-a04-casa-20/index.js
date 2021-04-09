const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

//for(let i = 0; i < original.length; i++) {
    //const item = original[i];
    //if(item % 2 === 0) {
        //pares.push(item);
    //} else {
        //impares.push(item);
    //}
//}
//console.log(pares);
//console.log(impares);

//ou

// let x = 0;
// while(x < original.length) {
//     if(original[x] % 2 === 0) {
//         pares.push(original[x]);
//     } else {
//         impares.push(original[x]);
//     }
//     x++;
// }

// console.log(pares);
// console.log(impares);

//ou

for(let item of original) {
    let resto = item % 2;
    if(resto === 0) {
        pares.push(item);
    } else {
        impares.push(item);
    }
}
console.log(pares);
console.log(impares);

