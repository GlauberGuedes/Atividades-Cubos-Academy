
const formulario = {
identificador : "123",
nome: "José silva costa",
email: "      jose@email.com  ",
tags: ['financeiro', 'administrativo', 'geral'],
validador: function() {

this.identificador = this.identificador.padStart(6, "0");
console.log(this.identificador);

console.log(this.email.trim());

console.log(this.tags.join(", "));

let umNome = this.nome.split(" ");

for(let i = 0; i < umNome.length; i++) {
umNome[i] = umNome[i][0].toUpperCase() + umNome[i].slice(1);
}
console.log(umNome.join(" ")); 
}
};

formulario.validador();





    // const palavra = umNome[i];
    // let letras = palavra.split("");
    // letras.splice(0, 1, letras[0].toUpperCase());
    // umNome[i] = letras.join("");




// let index = nome.indexOf(" ");
// let endindex = nome.lastIndexOf(" ");
// umNome.splice(0, 1, umNome[0].toUpperCase());
// umNome.splice(index + 1, 1, umNome[index + 1].toUpperCase());
// umNome.splice(endindex + 1, 1, umNome[endindex + 1].toUpperCase());
// console.log(umNome.join(""));

