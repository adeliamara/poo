export default class Calculadora {
    private _operando1: number;
    private _operando2: number;

    constructor(operando1: number, operando2: number) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }


    public somar(): number {
        return this._operando1 + this._operando2;
    }

    
   public get operando1() : number {
        return this._operando1;
    }

    public get operando2() : number {
        return this._operando2;
    }


}

function main(){
    let calculadora1: Calculadora = new Calculadora(4, 5);

    const soma = calculadora1.somar();
    
    console.log('soma: ', soma);
}






