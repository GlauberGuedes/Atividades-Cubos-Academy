//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 200500;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 59;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1790000;

if(mesesDecorridos > 60) {
    console.log("Não deve mais nada, pois passou o prazo maximo de 60 meses");
} else if(totalJaPagoPeloAluno >= 1800000){
    console.log("Não deve mais nada, pois o aluno já quitou sua divida");
} else if(rendaMensalEmCentavos > 200000) {
   let parcela = (rendaMensalEmCentavos * 0.18 / 100).toFixed(2);
   console.log(`O valor a ser pago esse mês é ${parcela} reais`)
} else if(rendaMensalEmCentavos <= 200000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
}
