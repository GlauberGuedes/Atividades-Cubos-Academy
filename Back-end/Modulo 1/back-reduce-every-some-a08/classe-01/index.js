const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abobora", "uva", "Pera", "abacaxi"];

numeros.sort((a, b) => a - b);
console.log(numeros);

numeros.sort((a, b) => b - a);
console.log(numeros);

numeros.sort();
console.log(numeros);

frutas.sort((a, b) => a.localeCompare(b));
console.log(frutas);

frutas.sort((a, b) => b.localeCompare(a));
console.log(frutas);

frutas.sort((a, b) => {
    if(a.length < b.length) {
        return -1;
    } else if(b.length > a.length) {
        return 1;
    } else if(a.length === b.length) {
        return a.localeCompare(b);
    }
});
console.log(frutas);