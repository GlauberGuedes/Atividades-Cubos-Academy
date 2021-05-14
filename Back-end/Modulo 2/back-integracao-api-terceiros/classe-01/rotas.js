const express = require('express');
const {pesquisarDominio} = require("./controladores/dominios");
const rotas = express();

rotas.get("/empresa/:dominioEmpresa",pesquisarDominio);


module.exports = rotas;