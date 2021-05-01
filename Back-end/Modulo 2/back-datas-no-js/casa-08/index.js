const {format} = require('date-fns');
const ptBR = require('date-fns/locale/pt-BR');
const date = new Date(2020,9,5);

const letraA = (data) => format(data, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

console.log(letraA(date));

const letraB = (data) => format(data, "dd/MM/yyyy");

console.log(letraB(date));

const letraC = (data) => format(data, "d MMM", { locale: ptBR });

console.log(letraC(date));

const letraD = (data) => format(data, "dd MMM yyyy", { locale: ptBR });

console.log(letraD(date));

const letraE = (data) => format(data, "dd 'de' MMM 'de' yyyy", { locale: ptBR });

console.log(letraE(date));

const letraF = (data) => format(data, "dd/MMM", { locale: ptBR });

console.log(letraF(date));