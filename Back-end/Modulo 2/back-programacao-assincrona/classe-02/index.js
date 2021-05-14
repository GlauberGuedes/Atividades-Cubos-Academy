const express = require("express");
const fs = require("fs/promises");
const axios = require("axios");

const app = express();

app.get("/enderecos/:cep", async (req,res) => {
    const cep = req.params.cep;
    
    // const array = cep.split("");
    // array.splice(5, 0, "-");
    // const cepCerto = array.join("");

    // const leituraDeArquivo = await fs.readFile("enderecos.json");
    const leituraDeArquivoObjeto = JSON.parse( await fs.readFile("enderecos.json"));


    for(const item of leituraDeArquivoObjeto) {
        if(item.cep) {
            if(item.cep.replace("-", "") === cep) {
                res.json({endereço: item});
                return;
            }
        }
        if(item.logradouro) {
            if(item.logradouro.includes(cep)) {
                res.json({endereço3: item});
                return;
            }
            //Ou
            // const rua = item.logradouro.split(" ");
    
            // if(rua.find(palavraLogradouro => palavraLogradouro === cep)) {
            //     res.json({endereço: item});
            //     return;
            // }
        }
    }
    if(!Number(cep)) {
        res.json({erro: "Endereço não encontrado"});
        return;
    }

    const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const respostaObjeto = resposta.data;

        leituraDeArquivoObjeto.push(respostaObjeto);

        const arquivoJson = JSON.stringify(leituraDeArquivoObjeto);

        await fs.writeFile("./enderecos.json", arquivoJson);

        res.json({endereço2: respostaObjeto});        
       
})

app.listen(8080);
