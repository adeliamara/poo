"use strict";
/*Altere a classe conta dos slides conforme as instruções abaixo:
a. Altere o método sacar de forma que ele retorne verdadeiro ou falso. Caso o
saque deixe saldo negativo, o mesmo não será realizado, retornando falso;
b. Altere o método transferir() para que retorne também um valor lógico e que
não seja feita a transferência caso o sacar() na conta origem não seja
satisfeito;
c. Verifique as diferentes operações implementadas.*/
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
