const jogada1 = "papel"
const jogada2 = "pedra"

//seu código aqui
if((jogada1 === "pedra" && jogada2 === "tesoura") || (jogada1 === "tesoura" && jogada2 === "papel") || (jogada1 === "papel" && jogada2 === "pedra")) {
console.log(jogada1);
} else if(jogada1 === jogada2) {
    console.log("EMPATE");
} else {
    console.log(jogada2);
}