const express = require("express");

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158
    }
];
let numeroId = 3;

app.get("/livros", (req, res) => {
    res.json(livros);
});

app.get("/livros/:idDoLivro", (req, res) => {
    const idDoLivro = req.params.idDoLivro;
    const livro = livros.find(livro => livro.id === Number(idDoLivro));
    const resposta = { mensagem: "" };
    if (livro) {
        res.json(livro);
    } else {
        resposta.mensagem = "O valor do parâmetro ID da URL não é um número válido.";
        res.json(resposta);
    }
});

app.post("/livros", (req, res) => {

    const novoLivro = {
        id: numeroId,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        numPaginas: req.body.numPaginas
    };
    numeroId += 1;

    livros.push(novoLivro);
    res.json(novoLivro);

});

app.put("/livros/:idDoLivro", (req, res) => {

    const idDoLivro = req.params.idDoLivro;
    const livro = livros.find(livro => livro.id === Number(idDoLivro));

    if (!livro) {
        res.status(404).json({ mensagem: "Não existe livro a ser substituído para o ID informado." });
    }
    if (livro) {
        if (!req.body.autor || !req.body.titulo || !req.body.ano || !req.body.numPaginas) {
            res.status(400).json({ mensagem: "Informações incompletas." });
        } else {
            livro.titulo = req.body.titulo;
            livro.autor = req.body.autor;
            livro.ano = req.body.ano;
            livro.numPaginas = req.body.numPaginas;
            res.json({ mensagem: "Livro substituído" });
        }
    }

});

app.patch("/livros/:idDoLivro", (req, res) => {

    const idDoLivro = req.params.idDoLivro;
    const livro = livros.find(livro => livro.id === Number(idDoLivro));

    if (livro) {
        if (req.body.titulo) {
            livro.titulo = req.body.titulo;
        }
        if (req.body.autor) {
            livro.autor = req.body.autor;
        }
        if (req.body.ano) {
            livro.ano = req.body.ano;
        }
        if (req.body.numPaginas) {
            livro.numPaginas = req.body.numPaginas;
        }
        res.json({mensagem: "Livro alterado"});
    } else {
        res.status(404).json({mensagem: "Não existe livro a ser alterado para o ID informado."});
    }

});

app.delete("/livros/:idDoLivro", (req,res) => {

    const idDoLivro = req.params.idDoLivro;
    const livro = livros.find(livro => livro.id === Number(idDoLivro));
    const indice = livros.indexOf(livro);

    if(livro) {
        livros.splice(indice, 1);
        res.json({mensagem: "Livro removido"});
    } else {
        res.status(404).json({mensagem: "Não existe livro a ser removido para o ID informado."});
    }

})

app.listen(8000);