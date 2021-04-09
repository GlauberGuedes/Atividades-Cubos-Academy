const numeros = [54, 22, 15, 87, 284];

let encontrado = false;
for(let i = 0; i <= numeros.length; i++) {
    const item = numeros[i];
    if(item === 10) {
        encontrado = true;
        console.log(`${i}`);
        break;
    }
}
if (!encontrado) {
    console.log("-1");
}