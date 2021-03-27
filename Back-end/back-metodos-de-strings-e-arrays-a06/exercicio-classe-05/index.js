const comentario = "Esse covid é muito perigoso!";
const comentarioFormatado = comentario.toUpperCase();
if(comentarioFormatado.includes("PANDEMIA") || comentarioFormatado.includes("COVID")) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado");
};