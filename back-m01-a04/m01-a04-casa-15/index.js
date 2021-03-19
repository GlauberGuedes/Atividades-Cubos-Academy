const numeros = [28, 11, 34, 5];
// let resposta = 0;
// let resposta2 = 0;
// for(let i = 0; i < numeros.length; i++) {
//     const numero = numeros[i];
//     for(let x = 0; x < numeros.length; x++) {
//         const outronumero = numeros[x];
//         if((numero - outronumero) > 0) {
//             resposta = numero - outronumero;
//         }
//     if(resposta > resposta2) {
//         resposta2 = resposta;
//     }
// }
// }
// console.log(resposta2);

//ou

let maior = numeros[0];
let menor = numeros[0];
for(let item of numeros) {
    if(item > maior) {
        maior = item;
    } else if (item < menor) {
        menor = item;
    }
}
let maiorDiferenca = maior - menor;
console.log(maiorDiferenca);