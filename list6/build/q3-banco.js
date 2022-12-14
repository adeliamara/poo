"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Banco {
    constructor(contas = []) {
        this._contas = contas;
    }
    inserir(conta) {
        if (!this.contaJaExiste(conta.numero)) {
            this._contas.push(conta);
            return true;
        }
        return false;
    }
    contaJaExiste(numero) {
        return this.encontraIndice(numero) != -1;
    }
    consultar(numero) {
        let contaProcurada;
        if (this.contaJaExiste(numero)) {
            const indice = this.encontraIndice(numero);
            contaProcurada = this._contas[indice];
        }
        return contaProcurada;
    }
    encontraIndice(numero) {
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                return i;
            }
        }
        return -1;
    }
    alterar(contaBuscada) {
        if (this.contaJaExiste(contaBuscada.numero)) {
            const indice = this.encontraIndice(contaBuscada.numero);
            this._contas[indice] = contaBuscada;
            return true;
        }
        return false;
    }
    excluir(numero) {
        if (this.contaJaExiste(numero)) {
            const indice = this.encontraIndice(numero);
            this._contas.splice(indice, 1);
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
        return this._contas.length;
    }
    consultarTotalDepositado() {
        let saldo_total = this._contas.reduce((soma, atual) => soma + atual.saldo, 0);
        return saldo_total;
    }
    consultarMediaSaldo() {
        let media = this.consultarTotalDepositado() / this.consultarQuantidadeContas();
        return media;
    }
}
exports.default = Banco;
