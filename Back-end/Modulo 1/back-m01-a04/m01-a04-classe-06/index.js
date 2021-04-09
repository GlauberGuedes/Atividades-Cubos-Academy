const numeros = [2, 3, 4, 6, 7, 15];
let resposta = 0;
for(let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    resposta += numero;
}
console.log(resposta);