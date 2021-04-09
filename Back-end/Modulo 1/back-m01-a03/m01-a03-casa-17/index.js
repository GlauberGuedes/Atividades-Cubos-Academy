//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let valorParcela = (valorDoProduto / 100 / quantidadeDoParcelamento).toFixed(2);
let parcelaPaga = valorPago * quantidadeDoParcelamento / (valorDoProduto / 100);
let qtparcelaAPagar = (quantidadeDoParcelamento - parcelaPaga);
if(valorDoProduto > valorPago) {
    console.log(`Restam ${qtparcelaAPagar} parcelas de R$${valorParcela}`)
}