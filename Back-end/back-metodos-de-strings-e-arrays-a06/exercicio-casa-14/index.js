const cpf = "011.022.033-44";

let resposta = cpf;
let respostaAnterior = "";
while(resposta !== respostaAnterior) {
    respostaAnterior = resposta;
    resposta = resposta.replace(".", "").replace("-", "");
}


console.log(resposta);