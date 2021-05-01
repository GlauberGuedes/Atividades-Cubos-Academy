const listaDeImoveis = require("../dados/listaDeImoveis");

function todosOsImoveis(req, res) {
    res.json(listaDeImoveis);
}

function umImovel(req, res) {
    const imovel = listaDeImoveis.find(imovel => imovel.id === Number(req.params.idConsultado));
    if(imovel) {
        res.json(imovel);
    } else {
        res.status(404);
        res.json({erro: "não existe imovel com este id"});
    }
}

module.exports = {todosOsImoveis, umImovel};