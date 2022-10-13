"use strict";
class Calculadora {
    constructor(_operando1, _operando2) {
        this._operando1 = _operando1;
        this._operando2 = _operando2;
    }
    somar() {
        return this._operando1 + this._operando2;
    }
    subtrair() {
        return this._operando1 - this._operando2;
    }
}
let calculadora1 = new Calculadora(4, 5);
const soma = calculadora1.somar();
const subtracao = calculadora1.subtrair();
console.log('soma: ', soma);
console.log('subtracao: ', subtracao);
