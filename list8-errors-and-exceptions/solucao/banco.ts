import Conta from "./conta";
import ContaImposto from "./contaImposto";
import { ContaInexistenteError } from "./errors/ContaInexistenteError";
import { ContaJaExiste } from "./errors/ContaJaxiste";
import { PoupancaInvalidaError } from "./errors/PoupancaInvalidaError";
import Poupanca from "./poupanca";


export default class Banco {
    private _contas: Array<Conta>;

    constructor(contas: Array<Conta> = []) {
        this._contas = contas;
    }

    public inserir(conta: Conta): void {

        try {
            this.encontraIndice(conta.numero);
            throw new ContaJaExiste('Já existe uma conta com este numero');
        } catch (e) {
            if (e instanceof ContaJaExiste) {
                throw new ContaJaExiste('Já existe uma conta com este numero');
            } else {
                this._contas.push(conta);
            }
        }

    }



    public consultar(numero: string): Conta {
        let contaProcurada: Conta;

        const indice = this.encontraIndice(numero);
        contaProcurada = this._contas[indice];

        return contaProcurada;
    }

    private encontraIndice(numero: string): number {
        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                return i;
            }
        }
        throw new ContaInexistenteError("Esta conta nao existe");
    }

    public alterar(contaBuscada: Conta): void {
        const indice: number = this.encontraIndice(contaBuscada.numero);
        this._contas[indice] = contaBuscada;
    }

    public excluir(numero: string): void {
        const indice: number = this.encontraIndice(numero);
        this._contas.splice(indice, 1);
    }

    public depositar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero);

        if (conta instanceof ContaImposto) {
            (<ContaImposto>conta).depositar(valor);
        } else {
            conta.depositar(valor);
        }
    }

    public debitar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero);

        if (conta instanceof ContaImposto) {
            (<ContaImposto>conta).debitar(valor);
        } else {
            conta.debitar(valor);

        }

    }

    public transferir(numeroDebito: string, numeroCredito: string, valor: number): void {
        this.debitar(numeroDebito, valor);
        this.depositar(numeroCredito, valor);

    }


    public consultarQuantidadeContas(): number {
        return this._contas.length;
    }

    public consultarTotalDepositado(): number {
        let saldo_total: number = this._contas.reduce((soma, atual) => soma + atual.saldo, 0);

        return saldo_total;
    }

    public consultarMediaSaldo(): number {
        let media: number = this.consultarTotalDepositado() / this.consultarQuantidadeContas();

        return media;
    }

    public renderJuros(numeroConta: string): void {
        let contaEncontrada: Conta = this.consultar(numeroConta);

        this.validaPoupanca(contaEncontrada);
        (<Poupanca>contaEncontrada).renderJuros();

    }

    public listarContasExistentes() {
        for (let conta of this._contas) {
            console.log(conta);
        }
    }

    private validaPoupanca(conta: Conta): void {
        if (!(conta instanceof Poupanca)) {
            throw new PoupancaInvalidaError("Esta conta não é um poupanca!");
        }
    }


}