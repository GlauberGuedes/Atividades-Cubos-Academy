const express = require("express");

const app = express();
app.use(express.json());

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];


app.get("/convidados", (req, res) => {
    const nomeDoConvidado = req.query.nome;
    const convidado = convidados.find(convidado => convidado === nomeDoConvidado);
    const resposta = {mensagem : ""};

    if(!nomeDoConvidado) {
        res.json(convidados);
    } else if(convidado === undefined) {
        resposta.mensagem = "O convidado buscado não está presente na lista.";
        res.json(resposta);
    } else {
        resposta.mensagem = "Convidado presente.";
        res.json(resposta);
    }
});

app.post("/convidados", (req,res) => {
    const temNome = convidados.find(convidado => convidado === req.body.nome);
    const resposta = {mensagem : ""};

    if(temNome) {
        resposta.mensagem = "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.";
        res.json(resposta);
    } else {
        convidados.push(req.body.nome);
        resposta.mensagem = "Convidado adicionado.";
        res.json(resposta);
    }
});

app.delete("/convidados/:nome", (req,res) => {
    const temNome = convidados.find(convidado => convidado === req.params.nome);
    const resposta = {mensagem : ""};
    let indice = convidados.indexOf(temNome);

    if(temNome) {
        convidados.splice(indice, 1);
        resposta.mensagem = "Convidado removido.";
        res.json(resposta);
    } else {
        resposta.mensagem = "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.";
        res.json(resposta);
    }
});

app.listen(8000);