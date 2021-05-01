const {add, differenceInDays} = require('date-fns');

const promocao = (dataPromocao, dataPedido) => differenceInDays(dataPedido,dataPromocao) <= 30;


// function promocao(dataPromocao, dataPedido) {

//     const duracaoPromocao = add(dataPromocao, {days: 30});
//     const pedidoCliente = +dataPedido;
//     if(pedidoCliente >= +dataPromocao && pedidoCliente <= +duracaoPromocao) {
//         return true;
//     } else {
//         return false;
//     }
// }

console.log(promocao(new Date(2021,3,24,12,1), new Date(2021,4,24,12,1)))