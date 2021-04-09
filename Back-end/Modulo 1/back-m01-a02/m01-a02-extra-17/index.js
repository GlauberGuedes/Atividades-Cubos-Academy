let capital = 60000, montante = 90000, n = 24;
let i = Math.pow(montante / capital, 1 / n) - 1;
let taxa = i * 100;
let juros = taxa.toFixed(4);
console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${juros} %, pois após ${n} meses você teve que pagar ${montante} reais.`);

