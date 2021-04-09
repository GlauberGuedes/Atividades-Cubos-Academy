const caractere = -9;

if(caractere >= 0 || caractere <= 0) {
    console.log("Número");
} else if(caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log("Vogal minuscula");
} else if(caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log("Vogal maiuscula");
} else {
    console.log("Consoante");
}