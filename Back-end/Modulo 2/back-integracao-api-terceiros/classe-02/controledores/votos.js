const fs = require('fs/promises');
const instanciaAxios = require("../servicos/apivotos");

async function validandoVoto(req, res) {
    const { pais, ip } = req.params;
    const { body } = req;
    const paisFormatado = pais.slice(0, 1).toUpperCase() + pais.slice(1);
    const votos = await fs.readFile("votos.json");
    const votosObjeto = JSON.parse(votos);

    try {
        const pedido = await instanciaAxios.get(`?api_key=58cafbe4558f425d8e8c731e3b26fbe0&ip_address=${ip}`);
        if (pedido.data.country === paisFormatado) {
            if (votosObjeto.find(voto => voto.ip === ip)) return res.status(400).json({ erro: "esse IP já foi utilizado." });
            else {
                votosObjeto.push({
                    ip: ip,
                    voto: body.voto
                });
                await fs.writeFile("votos.json", JSON.stringify(votosObjeto));
                res.status(200).json({ voto: "validado." });
            }
        } else {
            res.status(400).json({ erro: "IP enviado não coincide com o país da votação. Obs: o país tem que ser escrito em inglês." });
        }

    } catch (error) {
        const { status, data } = error.response;
        return res.status(status).json({ erro: `${data.error.message} - ${data.error.details.ip_address}` });
    }
}

async function consultarVotos(req, res) {
    const votos = await fs.readFile("votos.json");
    const votosObjeto = JSON.parse(votos);
    res.json(votosObjeto);
}

async function consultarQuantidadeDeVotosAFavor (req,res) {
    const votos = await fs.readFile("votos.json");
    const votosObjeto = JSON.parse(votos);

    let votosAFavor = 0;

    for(const voto of votosObjeto) {
        voto.voto === true ? votosAFavor++ : votosAFavor += 0;
    }
     
    res.json({votosAFavor});
}

module.exports = { validandoVoto, consultarVotos, consultarQuantidadeDeVotosAFavor};