const nomes = ['Maria', 'João', 'José', 'Antonio', 'Beatriz', 'Camila', 'amanda'];

const nomesFiltrados = nomes.filter(x => x[0] === "a" || x[0] === "A");
console.log(nomesFiltrados);