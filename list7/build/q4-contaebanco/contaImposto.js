"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = __importDefault(require("./conta"));
class ContaImposto extends conta_1.default {
    constructor(numero, saldo, taxaDeDesconto) {
        super(numero, saldo);
        this._taxaDesconto = taxaDeDesconto;
    }
    //override
    debitar(valor) {
        const valor_descontado = valor * (1 + this._taxaDesconto / 100);
        if (valor_descontado <= this.saldo) {
            this.saldo = this.saldo - valor_descontado;
            return true;
        }
        return false;
    }
}
exports.default = ContaImposto;
