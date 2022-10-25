import Conta from "./conta";
import ContaImposto from "./contaImposto";
import Poupanca from "./poupanca";

export default class Banco {
    private _contas: Array<Conta>;

    constructor(contas: Array<Conta> = []) {
        this._contas = contas;
    }

    public inserir(conta: Conta): boolean {
        if (!this.contaJaExiste(conta.numero)) {
            this._contas.push(conta);
            return true;
        }
        return false;
    }

    public contaJaExiste(numero: string): boolean {
        return this.encontraIndice(numero) != -1;
    }


    public consultar(numero: string): Conta {
        let contaProcurada!: Conta;
   if (this.contaJaExiste(numero)) {
            const indice = this.encontraIndice(numero);
            contaProcurada = this._contas[indice];
        }
        return contaProcurada;
    }

    private encontraIndice(numero: string): number {
        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                return i;
            }
        }
        return -1;
    }

    public alterar(contaBuscada: Conta): boolean {
        if (this.contaJaExiste(contaBuscada.numero)) {
            const indice: number = this.encontraIndice(contaBuscada.numero);
            this._contas[indice] = contaBuscada;
            return true;
        }
        return false;
    }


    public excluir(numero: string): boolean {
        if (this.contaJaExiste(numero)) {
            const indice: number = this.encontraIndice(numero);
            this._contas.splice(indice, 1);
            return true;
        }
        return false;
    }

    public depositar(numero: string, valor: number): boolean {
        let conta: Conta = this.consultar(numero);

        if (this.contaJaExiste(numero)) {
            if(conta instanceof ContaImposto){
                (<ContaImposto> conta).depositar(valor);
                return true;
            }
            conta.depositar(valor);
            return true;
        }
        return false;
    }

    public debitar(numero: string, valor: number): boolean {
        let conta: Conta = this.consultar(numero);

        let sucesso: boolean = false;
        if (this.contaJaExiste(numero)) {
            if(conta instanceof ContaImposto){
                sucesso = (<ContaImposto> conta).debitar(valor);
            }else{
                sucesso = conta.debitar(valor);
            }
        }

        return sucesso;
    }

    public transferir(numeroDebito: string, numeroCredito: string, valor: number): boolean {
        let sucesso: boolean= false;
        if (this.contaJaExiste(numeroCredito) && this.contaJaExiste(numeroCredito)) {
            if(this.debitar(numeroDebito, valor)){
                this.depositar(numeroCredito, valor);
                sucesso = true;
            }
        }

        return sucesso;

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

    public renderJuros(numeroConta: string): boolean {
        let contaEncontrada: Conta = this.consultar(numeroConta);

        if (contaEncontrada instanceof Poupanca) {
            (<Poupanca> contaEncontrada).renderJuros();
            return true;
        }
        return false;
    }

    public listarContasExistentes(){
        for(let conta of this._contas){
            console.log(conta);
        }
    }


}