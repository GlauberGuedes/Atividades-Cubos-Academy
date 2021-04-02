const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const cidadesAteOitoCaractere = cidades.filter(x => x.length <= 8);
console.log(cidadesAteOitoCaractere);

console.log(cidadesAteOitoCaractere.join(", "));

