class Calculadora {
    private _operando1: number;
    private _operando2: number;

    constructor(_operando1: number, _operando2: number) {
        this._operando1 = _operando1;
        this._operando2 = _operando2;
    }

    public somar(): number {
        return this._operando1 + this._operando2;
    }

    public subtrair(): number {
        return this._operando1 - this._operando2;
    }
}


let calculadora1: Calculadora = new Calculadora(4, 5);

const soma = calculadora1.somar();
const subtracao = calculadora1.subtrair();

console.log('soma: ', soma);
console.log('subtracao: ', subtracao);


