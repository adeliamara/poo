"use strict";
class Funcionario {
    constructor(salario) {
        this.salario = salario;
    }
}
class Gerente extends Funcionario {
    constructor() {
        super(...arguments);
        this.login = "";
        this.senha = "";
    }
    getBonificacao() {
        return this.salario * 1.4;
    }
    autentica(login, senha) {
        if (this.login == login && this.senha == senha) {
            return true;
        }
        else {
            return false;
        }
    }
}
class Cliente {
    autentica(login, senha) {
        return false;
    }
}
class Diretor extends Funcionario {
    constructor() {
        super(...arguments);
        this.login = "";
        this.senha = "";
    }
    getBonificacao() {
        return this.salario * 2.0;
    }
}
class ControleInterno {
    autentica(autenticavel, login, senha) {
        if (autenticavel.autentica(login, senha)) {
            return true;
        }
        else {
            return false;
        }
    }
}
let f1 = new Gerente(1000);
let f2 = new Diretor(1000);
console.log(f1.getBonificacao());
console.log(f2.getBonificacao());
let ci = new ControleInterno();
let gerente = f1;
gerente.login = "teste";
gerente.senha = "123";
let cliente = new Cliente();
console.log(ci.autentica(gerente, "teste", "123"));
console.log(ci.autentica(cliente, "teste", "1234"));
//console.log(gerente instanceof Autenticavel);
