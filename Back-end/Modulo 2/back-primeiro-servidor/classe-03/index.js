const express = require("express");

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indice = 0;
let rodada = 1;
app.get("/rodada", (req, res) => {
    if(indice === jogadores.length) {
        indice = 0;
        rodada ++;
    }
    const jogador = jogadores[indice];
    res.send("Rodada " + rodada + ": é a vez de " + jogador + " jogar!");
    indice ++;
});

app.listen(8000);