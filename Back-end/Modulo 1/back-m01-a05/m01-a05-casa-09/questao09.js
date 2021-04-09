// function imprimirResumoDoCarrinho (carrinho) {
// console.log(`Cliente: ${carrinho.nomeDoCliente}`);
// let itens = 0;
// let pagamento = 0;
// for(item of carrinho.produtos){
// itens += item.qtd;
// pagamento += item.qtd * item.precoUnit;
// }
// console.log(`Total de itens: ${itens} itens`);
// console.log(`Total a pagar: R$ ${pagamento/100},00`);
// };

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
   
        console.log(`Total de itens: ${this.calcularTotalDeItens(this.produtos)} itens`);
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar(this.produtos)}`);
    },
    addProduto: function (produto) {
        let adicionar = false;
        for (let item of this.produtos) {
            if (item.id === produto.id) {
                item.qtd += produto.qtd;
                adicionar = true;
            }
        }
        if (!adicionar) {
            this.produtos.push(produto);
        }
    },
    imprimirDetalhes: function () {
        console.log(carrinho.nomeDoCliente);
        let item = 1;
        for (let i of this.produtos) {
            console.log(`Item ${item} - ${i.nome} - ${i.qtd} und - R$ ${(i.precoUnit * i.qtd / 100).toFixed(2)}`);
            item += 1;
        }
        console.log(`Total de itens: ${this.calcularTotalDeItens(this.produtos)} itens`);
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar(this.produtos)}`);
    },

    calcularTotalDeItens: function() {
        let totalDeItens = 0;
        for(let item of this.produtos) {
            if(item.qtd >= 1) {
                totalDeItens += item.qtd;
            }
        }
        return totalDeItens;
    },

    calcularTotalAPagar: function() {
        let totalAPagarEmReais = 0;
        for(let item of this.produtos) {
            if(item.qtd >= 1) {
                totalAPagarEmReais += (item.qtd * item.precoUnit / 100);
            }
        }
        return totalAPagarEmReais.toFixed(2);
    },
    calcularDesconto: function() {
        let menorPreco = 999999999999;
        let desconto1 = 0;
        let desconto2 = 0;
        for (let item of this.produtos) {
            if(item.precoUnit < menorPreco) {
                menorPreco = item.precoUnit;
            }
            if(this.calcularTotalDeItens(this.produtos) > 4) {
                desconto1 = (menorPreco / 100).toFixed(2);
            }
            if(this.calcularTotalAPagar(this.produtos) > 100) {
                desconto2 = (this.calcularTotalAPagar(this.produtos) * 0.1).toFixed(2);
            }
        }
        if(desconto1 > desconto2) {
            console.log(desconto1);
            return desconto1;
        } else {
            console.log(desconto2);
            return desconto2;
        }
    }
};


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};


const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}


carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
carrinho.calcularDesconto();

