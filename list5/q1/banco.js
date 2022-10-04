"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Banco {
    constructor(contas = []) {
        this.contas = contas;
    }
    inserir(conta) {
        if (!this.consultar(conta.numero) != null) {
            this.contas.push(conta);
        }
    }
    contaJaExiste(numero) {
        for (let conta of this.contas) {
            if (numero == conta.numero) {
                return true;
            }
        }
        return false;
    }
    consultar(numero) {
        if (this.contaJaExiste(numero)) {
            for (let conta of this.contas) {
                if (numero == conta.numero) {
                    return conta;
                }
            }
        }
    }
    encontraIndice(numero) {
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                return i;
            }
        }
        return -1;
    }
    alterar(contaBuscada) {
        if (this.contaJaExiste(contaBuscada.numero)) {
            const indice = this.encontraIndice(contaBuscada.numero);
            this.contas[indice] = contaBuscada;
            return true;
        }
        return false;
    }
    excluir(numero) {
        if (this.contaJaExiste(numero)) {
            const indice = this.encontraIndice(numero);
            this.contas.splice(indice, 1);
            return true;
        }
        return false;
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        if (this.contaJaExiste(numero)) {
            conta.depositar(valor);
        }
    }
    sacar(numero, valor) {
        let conta = this.consultar(numero);
        if (this.contaJaExiste(numero)) {
            conta.sacar(valor);
        }
    }
    transferir(numeroCredito, numeroDebito, valor) {
        if (this.contaJaExiste(numeroCredito) && this.contaJaExiste(numeroCredito)) {
            let contaCredito = this.consultar(numeroCredito);
            let contaDebito = this.consultar(numeroDebito);
            contaDebito.transferir(contaCredito, valor);
        }
        return this.contaJaExiste(numeroCredito) && this.contaJaExiste(numeroCredito);
    }
    consultarQuantidadeContas() {
        return this.contas.length;
    }
    consultarTotalDepositado() {
        let saldo_total = 0;
        if (this.consultarQuantidadeContas() > 0) {
            for (let conta of this.contas) {
                saldo_total += conta.consultarSaldo();
            }
        }
        return saldo_total;
    }
    consultarMediaSaldo() {
        let media = this.consultarTotalDepositado() / this.consultarQuantidadeContas();
        return media;
    }
}
exports.default = Banco;
