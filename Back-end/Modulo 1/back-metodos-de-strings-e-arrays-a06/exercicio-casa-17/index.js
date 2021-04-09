const nomeArquivo = 'Foto da.jpeg. Familia.pdf';

function validadorArquivo(arquivo) {
    let posicaoDoUltimoPonto = arquivo.lastIndexOf(".");
    if(arquivo.includes("jpg", posicaoDoUltimoPonto) || arquivo.includes("jpeg", posicaoDoUltimoPonto) ||arquivo.includes("gif", posicaoDoUltimoPonto) ||arquivo.includes("png", posicaoDoUltimoPonto)) {
        console.log(`Arquivo válido`);
    }  else {
        console.log(`Arquivo inválido`);
    }
        
};

validadorArquivo(nomeArquivo);


// Esse segundo validador não funciona para o exemplo acima.

// function segundoValidadorArquivo(nomeArquivo) {
//     const arrayDoArquivo = nomeArquivo.split(".");
//     let permitido = false;
//     for(let extensao of arrayDoArquivo) {
//         if(extensao === "jpg" || extensao === "jpeg" || extensao === "gif" || extensao === "png") {
//             console.log(`Arquivo válido`);
//             permitido = true;
//         }
//     }
//     if(!permitido) {
//         console.log(`Arquivo inválido`);
//     }
// }

// segundoValidadorArquivo(nomeArquivo);