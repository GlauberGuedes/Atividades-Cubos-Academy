const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const verificacao = palavras.some(x => x.length > 5);
if (verificacao) {
    console.log(`existe palavra inválida`);
} else {
    console.log("array validado.");
}

