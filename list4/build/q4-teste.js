"use strict";
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
/*
let p : Pessoa = new Pessoa("ely");
console.log(p.nome);
*/
class Conta {
    constructor(numero, saldo, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    get nomeCliente() {
        return this.cliente.nome;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    equals(conta) {
        return (this.numero == conta.numero &&
            this.cliente.nome == conta.cliente.nome);
    }
}
class Banco {
    constructor() {
        this.contas = [];
    }
    inserir(conta) { }
    alterar(conta) { }
    excluir(numero) { }
    //consultar(numero: string): Conta {}
    sacar(numero, valor) { }
    depositar(numero, valor) { }
    transfeir(numeroOrigem, numeroDestino, valor) { }
}
let a = new Pessoa("ade");
let p = new Pessoa("paulo");
let c1 = new Conta("1", 100, a);
let c2 = new Conta("2", 100, p);
let c3;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
