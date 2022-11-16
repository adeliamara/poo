"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contaImposto_1 = __importDefault(require("./contaImposto"));
const ContaInexistenteError_1 = require("./errors/ContaInexistenteError");
const ContaJaxiste_1 = require("./errors/ContaJaxiste");
const PoupancaInvalidaError_1 = require("./errors/PoupancaInvalidaError");
const poupanca_1 = __importDefault(require("./poupanca"));
class Banco {
    constructor(contas = []) {
        this._contas = contas;
    }
    inserir(conta) {
        try {
            this.encontraIndice(conta.numero);
            throw new ContaJaxiste_1.ContaJaExiste('Já existe uma conta com este numero');
        }
        catch (e) {
            if (e instanceof ContaJaxiste_1.ContaJaExiste) {
                throw new ContaJaxiste_1.ContaJaExiste('Já existe uma conta com este numero');
            }
            else {
                this._contas.push(conta);
            }
        }
    }
    consultar(numero) {
        let contaProcurada;
        const indice = this.encontraIndice(numero);
        contaProcurada = this._contas[indice];
        return contaProcurada;
    }
    encontraIndice(numero) {
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                return i;
            }
        }
        throw new ContaInexistenteError_1.ContaInexistenteError("Esta conta nao existe");
    }
    alterar(contaBuscada) {
        const indice = this.encontraIndice(contaBuscada.numero);
        this._contas[indice] = contaBuscada;
    }
    excluir(numero) {
        const indice = this.encontraIndice(numero);
        this._contas.splice(indice, 1);
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta instanceof contaImposto_1.default) {
            conta.depositar(valor);
        }
        else {
            conta.depositar(valor);
        }
    }
    debitar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta instanceof contaImposto_1.default) {
            conta.debitar(valor);
        }
        else {
            conta.debitar(valor);
        }
    }
    transferir(numeroDebito, numeroCredito, valor) {
        this.debitar(numeroDebito, valor);
        this.depositar(numeroCredito, valor);
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
    renderJuros(numeroConta) {
        let contaEncontrada = this.consultar(numeroConta);
        this.validaPoupanca(contaEncontrada);
        contaEncontrada.renderJuros();
    }
    listarContasExistentes() {
        for (let conta of this._contas) {
            console.log(conta);
        }
    }
    validaPoupanca(conta) {
        if (!(conta instanceof poupanca_1.default)) {
            throw new PoupancaInvalidaError_1.PoupancaInvalidaError("Esta conta não é um poupanca!");
        }
    }
}
exports.default = Banco;
