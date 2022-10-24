"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const q2_calculadora_1 = __importDefault(require("./q2-calculadora"));
class CalculadoraCientifica extends q2_calculadora_1.default {
    constructor(operando1, operando2) {
        super(operando1, operando2);
    }
    exponenciar() {
        return Math.pow(this.operando1, this.operando2);
    }
}
//como os atributos de calculadora são privados, foi necessário inserir o método get para que pudessemos acessar 
//estes atributos
function main() {
    let calculadora3 = new CalculadoraCientifica(4, 5);
    console.log(calculadora3);
    console.log(calculadora3.exponenciar());
}
main();
