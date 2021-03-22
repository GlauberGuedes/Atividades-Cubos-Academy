const letras = ["A", "a", "E", "C", "L", "e"];
let numero = 0;
for(let i = 0; i < letras.length; i++) {
    const letra = letras[i];
    if(letra === "e" || letra === "E") {
        numero += 1;
    }
}
if(numero > 0) {
    console.log(`Foram encontradas ${numero} letras "E" ou "e".`)
}
else {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`)
}