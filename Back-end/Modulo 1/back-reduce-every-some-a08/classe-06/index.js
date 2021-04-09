const numeros = [0, 122, 4, 6, 8, 44];

const numerosPares = numeros.every(x => x % 2 === 0);
if(numerosPares) {
    console.log("array válido");
} else {
    console.log("array inválido");
}
