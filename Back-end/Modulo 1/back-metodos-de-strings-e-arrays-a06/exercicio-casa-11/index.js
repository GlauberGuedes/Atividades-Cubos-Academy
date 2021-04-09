const celular = 71999918888;
let stringCelular = `${celular}`;
if(stringCelular.length === 8) {
    console.log(`9 ${stringCelular.slice(0, 4)}-${stringCelular.slice(4, 8)}`);
} else if(stringCelular.length === 9) {
    console.log(`${stringCelular[0]} ${stringCelular.slice(1, 5)}-${stringCelular.slice(5, 9)}`);
} else if(stringCelular.length === 10) {
    console.log(`(${stringCelular.substr(0,2)}) 9 ${stringCelular.substr(2, 4)}-${stringCelular.substr(6, 4)}`);
} else if(stringCelular.length === 11) {
    console.log(`(${stringCelular.substr(0,2)}) ${stringCelular.substr(2, 1)} ${stringCelular.substr(3, 4)}-${stringCelular.substr(7, 4)}`)
}


// let arrayCelular = `${celular}`.split("")
// if (arrayCelular.length === 10) {
//     arrayCelular.splice(0, 0, "(");
//     arrayCelular.splice(3, 0, ")");
//     arrayCelular.splice(4, 0, " ");
//     arrayCelular.splice(5, 0, "9");
//     arrayCelular.splice(6, 0, " ");
//     arrayCelular.splice(11, 0, "-");
//     console.log(arrayCelular.join(""));
// } else if (arrayCelular.length === 8) {
//     arrayCelular.splice(0, 0, "9");
//     arrayCelular.splice(1, 0, " ");
//     arrayCelular.splice(6, 0, "-");
//     console.log(arrayCelular.join(""));
// } else if (arrayCelular.length === 9) {
//     arrayCelular.splice(1, 0, " ");
//     arrayCelular.splice(6, 0, "-");
//     console.log(arrayCelular.join(""));
// } else if (arrayCelular.length === 11) {
//     arrayCelular.splice(0, 0, "(");
//     arrayCelular.splice(3, 0, ")");
//     arrayCelular.splice(4, 0, " ");
//     arrayCelular.splice(6, 0, " ");
//     arrayCelular.splice(11, 0, "-");
//     console.log(arrayCelular.join(""));
// }