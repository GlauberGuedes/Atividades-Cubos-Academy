//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if(tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    let valor = (valorDoProduto * 0.9 / 100).toFixed(2);
    console.log(`Valor a ser pago: R$${valor}`);
} else if(tipoDePagamento === "credito") {
    let valor = (valorDoProduto * 0.95 / 100).toFixed(2);
    console.log(`Valor a ser pago: R$${valor}`);
} else {
    let valor = (valorDoProduto * 0.97 / 100).toFixed(2);
    console.log(`Valor a ser pago: R$${valor}`);
}