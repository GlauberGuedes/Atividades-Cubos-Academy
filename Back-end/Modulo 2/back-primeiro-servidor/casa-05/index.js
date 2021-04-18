const express = require("express");

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let indiceArray = 0;
let tamanhoArray = jogadores.length -1;
app.get("/rodada", (req, res) => {
    indiceArray === jogadores.length ? indiceArray = 0 : indiceArray;
    const jogador = jogadores[indiceArray];
    res.send("É a vez de " + jogador + " jogar!");
    indiceArray ++;
});

app.get("/remover", (req, res) => {
    const indice = Number(req.query.indice);
    if(!indice) {
        return res.send("Passe um indice.");
    }
    if(indice > tamanhoArray) {
        res.status(404);
        res.send("Não existe jogador no índice informado (" + indice + ") para ser removido.")
    } else {
        jogadores.splice(indice, 1);
        res.send(jogadores);
    }
});

app.get("/adicionar", (req, res) => {
    const nome = req.query.nome;
    let indice = req.query.indice;
    const nomeFormatado = nome.slice(0, 1).toUpperCase() + nome.slice(1).toLowerCase();
    if(indice === undefined) {
        jogadores.push(nomeFormatado);
        res.send(jogadores);
    } 
    indice = Number(indice);
    if(indice <= tamanhoArray) {
        jogadores.splice(indice, 0, nomeFormatado);
        res.send(jogadores);
    } else {
        res.send("O índice informado (" + indice + ") não existe no array. Novo jogador não adicionado.");
    }
})

app.listen(8000);



