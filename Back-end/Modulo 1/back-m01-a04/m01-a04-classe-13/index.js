const numeros = [3, 4, 13, 28, 11, 17, 5];
let resposta = 0;

for(let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if(numero > resposta) {
        resposta = numero;
    }
}
console.log(resposta);