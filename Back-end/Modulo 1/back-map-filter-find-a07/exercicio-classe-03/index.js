const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const frutasModificadas = frutas.map((x, i) => {
    return `${i} - ${x[0].toUpperCase() + x.slice(1).toLowerCase()}`;
});
console.log(frutasModificadas);