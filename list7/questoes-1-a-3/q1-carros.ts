class Veiculo {
    private _placa: string;
    private _ano: number;

    constructor(placa: string, ano: number){
        this._placa = placa;
        this._ano = ano;
    }
}

class Carro extends Veiculo {
    private _modelo: String;

    constructor(placa:string, ano: number, modelo: string){
        super(placa, ano);
        this._modelo = modelo;
    }
}

class CarroEletrico extends Carro {
    private _autonomiaBateria: number;

    constructor(placa:string, ano: number, modelo: string, autonomiaBateria: number){
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

