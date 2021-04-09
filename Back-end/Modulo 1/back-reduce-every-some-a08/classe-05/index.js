const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const revisaoLista = palavras.some(x => x === "cerveja" || x === "vodka");
if(revisaoLista) {
    console.log("revise sua lista, joão. possui bebida com venda proibida!");
} else {
    console.log("tudo certo, vamos as compras!");
}