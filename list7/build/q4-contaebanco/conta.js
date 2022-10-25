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
    set saldo(value) {
        this._saldo = value;
    }
    debitar(valor) {
        if (valor <= this._saldo) {
            this._saldo = this._saldo - valor;
            return true;
        }
        return false;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
    transferir(contaDestino, valor) {
        if (this.debitar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}
exports.default = Conta;
