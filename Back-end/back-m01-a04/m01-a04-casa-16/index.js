const original = [5, 10, 13, 170, 26, 14, 118, 245];

let array = [];
for(let i = 0; i < original.length; i++) {
    const numero = original[i];
    if((numero >= 10 && numero <= 20) || numero > 100) {
        array.push(numero);
    }
}
console.log(array);
