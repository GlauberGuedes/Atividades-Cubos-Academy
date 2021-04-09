const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let array = [];

// for(let i = 0; i < nomes.length; i++) {
//     const nome = nomes[i];
//     for(let x = 0; x < 1; x++) {
//         const letra = nome[x];
//     if(letra === "a" || letra === "A") {
//         array.push(nome);
//     }
// }
// }
// console.log(array);
for(let nome of nomes) {
    if(nome[0] === "a" || nome[0] === "A") {
        array.push(nome);
    }
}
console.log(array);
