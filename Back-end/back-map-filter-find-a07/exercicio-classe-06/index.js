const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];
let tempoRodada = 10;
let contagem = 10;
let index = 0;
function imprimirNomeDoJogador(jogadores) {
    if(contagem === 0) {
        console.log("A rodada terminou!");
        clearInterval(intervalJogadores);
    } else {
        console.log(jogadores[index]);
        index++;
        contagem -= tempoRodada / jogadores.length;
    }
};

const intervalJogadores = setInterval(imprimirNomeDoJogador, tempoRodada / jogadores.length * 1000, jogadores);









