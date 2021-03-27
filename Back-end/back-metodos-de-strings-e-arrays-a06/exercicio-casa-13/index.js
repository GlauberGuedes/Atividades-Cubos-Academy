const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 4;

function divisaoGrupos(nomes, grupo) {
    let grupos = 1;
    while(nomes.length >= grupo) {
        console.log(`Grupo ${grupos}: ${nomes.splice(0, grupo).join(", ")}.`);
        grupos ++;
    };
        if(nomes.length !== 0) {
            console.log(`Grupo ${grupos}: ${nomes.join(", ")}.`);
        };
        
}

divisaoGrupos(nomes, tamanhoDoGrupo);