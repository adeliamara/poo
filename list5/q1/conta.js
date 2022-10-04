"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(numero, saldo = 0) {
        this.saldo = saldo;
        this.numero = numero;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
        }
        return valor <= this.saldo;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
        }
        return valor <= this.saldo;
    }
}
exports.default = Conta;
let conta1 = new Conta("1", 100);
let conta2 = new Conta("2", 50);
console.log(conta1.sacar(10));
console.log(conta1.consultarSaldo());
console.log(conta1.sacar(100));
console.log(conta1.consultarSaldo());
console.log(conta1.transferir(conta2, 10));
console.log(conta1.consultarSaldo());
console.log(conta2.consultarSaldo());
console.log(conta1.transferir(conta2, 100));
console.log(conta1.consultarSaldo());
console.log(conta2.consultarSaldo());
