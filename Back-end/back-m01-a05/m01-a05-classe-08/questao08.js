const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function() {
        let ligado = "";
        if(this.ligado) {
            console.log("Este carro já está ligado.");
        } else {
            this.ligado = true;
            ligado = "ligado";
            console.log(`Carro ${ligado}. velocidade: ${this.velocidade}`);
        }
    },
    desligar: function() {
        let ligado = "";
        if(!this.ligado) {
            console.log("Este carro já está desligado.");
        } else {
            this.ligado = false;
            this.velocidade = 0;
            ligado = "desligado";
            console.log(`Carro ${ligado}. velocidade: ${this.velocidade}`);
        }
    },
    acelerar: function() {
        let ligado = "";
        if(!this.ligado) {
            console.log(`Não é possível acelerar um carro desligado.`);
        } else if (this.ligado) {
            this.velocidade += 10;
            ligado = "ligado";
            console.log(`Carro ${ligado}. velocidade: ${this.velocidade}`);
        }
    },
    desacelerar: function() {
        let ligado = "";
        if(!this.ligado) {
            console.log(`Não é possível desacelerar um carro desligado.`);
        } else if (this.ligado) {
            this.velocidade -= 10;
            ligado = "ligado";
            console.log(`Carro ${ligado}. velocidade: ${this.velocidade}`);
        }
    }
};

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
