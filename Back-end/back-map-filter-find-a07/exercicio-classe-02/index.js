const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];
function cep (cep) {
    return cep;
}
const endereçoEncontrado = endereços.find( x => x.cep === cep(11222333));
if(endereçoEncontrado) {
    console.log(endereçoEncontrado.rua);
} else {
    console.log("Endereço errado")
};




    
