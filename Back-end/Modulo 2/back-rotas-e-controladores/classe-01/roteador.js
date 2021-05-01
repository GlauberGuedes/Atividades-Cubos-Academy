const express = require("express");
const imoveis = require("./controladores/imoveis");
const roteador = express();

roteador.get("/imoveis", imoveis.todosOsImoveis);
roteador.get("/imoveis/:idConsultado", imoveis.umImovel);

module.exports = roteador;