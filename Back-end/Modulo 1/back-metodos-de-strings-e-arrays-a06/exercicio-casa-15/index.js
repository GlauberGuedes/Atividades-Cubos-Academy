const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function grupoDeCarros(modelo, posicao) {
    console.log(modelo.splice(posicao, 3).join(" - "));
};

grupoDeCarros(nomes, posicao);