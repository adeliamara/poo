"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(_numero, _saldo = 0) {
        this._saldo = _saldo;
        this._numero = _numero;
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo = this._saldo - valor;
        }
        return valor <= this._saldo;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
    transferir(contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
        }
        return valor <= this._saldo;
    }
}
exports.default = Conta;
