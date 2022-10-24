"use strict";
class Veiculo {
    constructor(placa, ano) {
        this._placa = placa;
        this._ano = ano;
    }
}
class Carro extends Veiculo {
    constructor(placa, ano, modelo) {
        super(placa, ano);
        this._modelo = modelo;
    }
}
class CarroEletrico extends Carro {
    constructor(placa, ano, modelo, autonomiaBateria) {
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
    }
}
/*
function main(){
    let veiculo: Veiculo = new Veiculo('ABC123', 2004);
    console.log(veiculo);

    let carro: Carro = new Carro('DCE098', 2008, 'ONYX');
    console.log(carro);

    let carroEletrico: CarroEletrico = new CarroEletrico('EFG764', 2016, 'GOL BOLINHA', 10);
    console.log(carroEletrico);

}

main();*/
