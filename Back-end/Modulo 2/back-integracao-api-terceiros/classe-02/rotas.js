const express = require("express");
const {validandoVoto, consultarVotos, consultarQuantidadeDeVotosAFavor} = require("./controledores/votos");
const rotas = express();


rotas.post("/votacao/:pais/:ip", validandoVoto);
rotas.get("/votacao",consultarVotos);
rotas.get("/votacao/votosafavor", consultarQuantidadeDeVotosAFavor);

module.exports = rotas;