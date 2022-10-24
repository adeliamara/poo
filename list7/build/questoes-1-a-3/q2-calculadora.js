"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculadora {
    constructor(operando1, operando2) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }
    somar() {
        return this._operando1 + this._operando2;
    }
    get operando1() {
        return this._operando1;
    }
    get operando2() {
        return this._operando2;
    }
}
exports.default = Calculadora;
function main() {
    let calculadora1 = new Calculadora(4, 5);
    const soma = calculadora1.somar();
    console.log('soma: ', soma);
}
