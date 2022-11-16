"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValorInvalidoException_1 = require("./errors/ValorInvalidoException");
const SaldoInsuficienteError_1 = require("./errors/SaldoInsuficienteError");
const InputInvalidoError_1 = require("./errors/InputInvalidoError");
class Conta {
    constructor(_numero, _saldo = 0) {
        this.validaValor(_saldo);
        this._saldo = _saldo;
        this._numero = _numero;
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    debitar(valor) {
        this.validaValor(valor);
        this.validaSaldo(this.saldo, valor);
        this._saldo = this._saldo - valor;
    }
    depositar(valor) {
        this.validaValor(valor);
        this._saldo = this._saldo + valor;
    }
    transferir(contaDestino, valor) {
        this.debitar(valor);
        contaDestino.depositar(valor);
    }
    validaValor(valor) {
        this.validaInput(valor);
        if (valor <= 0) {
            throw new ValorInvalidoException_1.ValorInvalidoException("O valor depositado deve ser positivo");
        }
    }
    validaSaldo(saldo, valor) {
        this.validaInput(saldo);
        this.validaInput(valor);
        if (saldo < 0 || valor > saldo) {
            throw new SaldoInsuficienteError_1.SaldoInsuficienteError("O saldo nao foi suficiente para finalizar a operação!");
        }
    }
    validaInput(input) {
        if (isNaN(Number(input))) {
            throw new InputInvalidoError_1.InputInvalidoError("O dado de entrada deve ser um numero.");
        }
    }
}
exports.default = Conta;
