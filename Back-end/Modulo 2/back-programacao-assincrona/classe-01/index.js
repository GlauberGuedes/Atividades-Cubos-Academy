const express = require("express");
const axios = require("axios");

const app = express();

app.get("/pokemon", async (req,res) => {
    const inicio = req.query.inicio;
    const quantidade = req.query.quantidade;

    const resposta = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=${quantidade}`);
    res.json({descricao: resposta.data.results});
});

app.get("/pokemon/:idOuNome", async (req,res) => {
    const idOuNome = req.params.idOuNome;

    const resposta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOuNome}/`);
    const {id, name, height, weight, base_experience, forms, abilities, species} = resposta.data;
    res.json({id, name, height, weight, base_experience, forms, abilities, species});
})


app.listen(8080);