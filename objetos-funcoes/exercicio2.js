//Criar um objeto carro ue possuirá 6 membros, sendo 2 propriedades e pelo menos 4 métodos. As propriedades deverão ser um boolean chamado ligado e um number chamado velocidade. Além dos indicadores de ligado/desligado e de velocidade, este carro deverá possuir métodos para ligar, desligar, acelerar e desacelerar.
const carro = {
    ligado: true,
    velocidade: 70,
    ligar: function() {
        if(this.ligado){
            console.log("Este carro já está ligado.");
        }else{
            this.ligado = true;
        }
    },
    desligar: function() {
        if(!this.ligado){
            console.log("Este carro já está desligado.");
        }else{
            this.ligado = false;
            velocidade = 0;
        }
    },
    acelerar: function() {
        if(!this.ligado){
            console.log("Não é possível acelerar um carro desligado.");
        }else{
            this.velocidade += 10;
            console.log(`O carro está a ${this.velocidade}km/h`);
        }
    },
    desacelerar: function() {
        if(!this.ligado){
            console.log("Não é possível desacelerar um carro desligado.");
        }else{
            this.velocidade -= 10;
            console.log(`O carro está à ${this.velocidade}km/h`);
        }
    }

};
function statusDoCarro(carro){
    if(carro.ligado){
        console.log(`Carro ligado. Velocidade de ${carro.velocidade} km/h`);
    }else{
        console.log(`Carro desligado. Velocidade de ${carro.velocidade} km/h`);
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
