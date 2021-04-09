const texto = "Aprenda programar do zero na Cubos Academy";
const textominusculo = texto.toLowerCase();
let urlAmigavel = textominusculo;
let urlAnterior = "";
while(urlAmigavel !== urlAnterior) {
    urlAnterior = urlAmigavel;
    urlAmigavel = urlAmigavel.replace(" ","-");
}
console.log(urlAmigavel);