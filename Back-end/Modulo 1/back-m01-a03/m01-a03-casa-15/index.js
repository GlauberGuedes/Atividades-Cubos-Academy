const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "Bros";

if(apelido) {
    console.log(apelido);
} else if(primeiroNome && sobrenome) {
    console.log(`${primeiroNome} ${sobrenome}`);
} else if(primeiroNome) {
    console.log(primeiroNome);
}
