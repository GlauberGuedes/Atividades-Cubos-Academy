const fs = require('fs/promises');
const instanciaAxios = require("../servicos/empresa");

async function pesquisarDominio (req,res) {
    const {dominioEmpresa} = req.params;
    const empresas = await fs.readFile("empresas.json");
    const empresasObjeto = JSON.parse(empresas);
    try {
        const pedido = await instanciaAxios.get(`?api_key=34a8499969c4401daf6a685935323c1d&domain=${dominioEmpresa}`);
        if(pedido.data.name) {
            empresasObjeto.push(pedido.data);
            await fs.writeFile("empresas.json", JSON.stringify(empresasObjeto));
        }
        return res.json(pedido.data);
    } catch (error) {
        const {status, data} = error.response;
        return res.status(status).json(data);
    }
}

module.exports = {pesquisarDominio};