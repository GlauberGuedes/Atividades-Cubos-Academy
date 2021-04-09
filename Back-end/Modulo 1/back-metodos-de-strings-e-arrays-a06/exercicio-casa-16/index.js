
function geradorDeNickname(nome) {
    nome = nome.padStart(nome.length + 1, "@");
    let nickname = nome;
    let nicknameAntigo = "";
    while(nickname !== nicknameAntigo) {
        nicknameAntigo = nickname;
        nickname = nickname.replace(" ", "");
    }
    console.log(nickname.substr(0, 13).toLowerCase());
}

const nome = 'Guido Cerqueira';

geradorDeNickname(nome);
