const email = "jose.messias@cubos";
let index = email.indexOf("@");
if(!email.includes("@") || !email.includes(".") || email[0] === "." || email[email.length - 1] === "." || !email.includes(".", index)) {
    console.log("E-mail inválido");
} else {
    console.log("E-mail válido");
}