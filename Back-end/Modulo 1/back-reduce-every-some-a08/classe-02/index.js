const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const nomeMaisComprido = cidades.reduce((acc, item) => item.length > acc.length ? item : acc);
console.log(nomeMaisComprido);