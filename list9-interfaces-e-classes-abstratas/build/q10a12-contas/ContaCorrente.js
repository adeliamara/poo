"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const Conta_1 = require("./Conta");
class ContaCorrente extends Conta_1.Conta {
    calculaTributos() {
        return super.saldo * 0.1;
    }
}
exports.ContaCorrente = ContaCorrente;
