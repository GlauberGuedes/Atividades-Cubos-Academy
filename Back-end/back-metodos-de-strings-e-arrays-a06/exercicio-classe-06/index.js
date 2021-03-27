const cpf = "12345678900";
const cnpj = "12345678000199";
const array = cpf.split("");
if(cpf.length !== 11) {
    console.log("CPF Inválido");
} else {
    array.splice(3, 0, ".");
    array.splice(7, 0, ".");
    array.splice(11, 0, "-");
    console.log(array.join(""));
};
const arraycnpj = cnpj.split("");
if(cnpj.length !== 14) {
    console.log("CNPJ Inválido");
} else {
    arraycnpj.splice(2, 0, ".");
    arraycnpj.splice(6, 0, ".");
    arraycnpj.splice(10, 0, "/");
    arraycnpj.splice(15, 0, "-");
    console.log(arraycnpj.join(""));
};