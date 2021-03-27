const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let nota = 0;
    let questao = 0;
    for(let item of prova.questoes) {
        if(item.resposta === item.correta) {
            nota += prova.valor / prova.questoes.length;
            questao += 1;
        }
    }
    console.log(`O aluno(a) ${prova.aluno} acertou ${questao} questões e obteve nota ${nota}`);
}
corrigirProva(prova);