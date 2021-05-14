const fs = require("fs/promises");

async function ler () {
    const leituraDeArquivo = await fs.readFile("enderecos.json");
    const response = JSON.parse(leituraDeArquivo);
    return JSON.stringify(response);

}

ler().then((resposta) => console.log(resposta));

const objeto = {nome: "eu", idade: 17};
const objetojson = JSON.stringify(objeto);

fs.appendFile("./enderecos.json", objetojson, () => {
    console.log("arquivo escrito");
});




