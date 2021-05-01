const {isAfter, isBefore, addHours} = require('date-fns');

function promo(data1,data2) {
    const duracaopromo = addHours(data1, 24);
    if(isBefore(data1,data2) && isAfter(duracaopromo,data2)) return true;
    return false;
}

// function promocao(dataPromocao, dataPedido) {
//     const duracaoPromocao = +dataPromocao + 24*60*60*1000;
//     const pedidoCliente = +dataPedido;
//     if(pedidoCliente >= +dataPromocao && pedidoCliente <= duracaoPromocao) {
//         return true;
//     } else {
//         return false;
//     }
// }

console.log(promo(new Date(2021,3,24,12,1,1), new Date(2021,3,25,12,1)))