const express = require("express");

const app = express();

let segundos = 0;
let minutos = 0;
let ligado = false;
let pausado = false;
let intervalId = null;
function cronometro() {
    segundos ++;
    if(segundos === 60) {
        minutos += 1;
        segundos = 0;
    }
}
function status() {
    if(ligado && !pausado) {
        intervalId = setInterval(cronometro, 1000);
    } else {
        clearInterval(intervalId);
    }
};

app.get("/", (req,res) => {
    res.send("Tempo atual do cronômetro: " + `${minutos}`.padStart(2, "0") + " minutos e " + `${segundos}`.padStart(2, "0") + " segundos");
});

app.get("/iniciar", (req,res) => {
    if(!ligado && !pausado) {
        ligado = true;
        status();
        res.send("Cronômetro iniciado!");      
    } else {
        res.send("Não pode ser iniciado!")
    };
});

app.get("/pausar", (req,res) => {
    if(ligado && !pausado) {
    pausado = true;
    status();
    res.send("Cronômetro pausado!");
    } else {
        res.send("Cronômetro não pode ser pausado!")
    }
});

app.get("/continuar", (req,res) => {
    if(ligado && pausado) {
    pausado = false;
    status();
    res.send("Cronômetro continuando!");
    } else {
        res.send("Cronômetro não pode continuar!");
    }
});

app.get("/zerar", (req, res) => {
    segundos = 0;
    minutos = 0;
    res.send("cronômetro zerado!");
});

const porta = 8000;

app.listen(porta, () => console.log(`servidor rodando na porta ${porta}`));