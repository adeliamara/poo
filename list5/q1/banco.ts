import Conta from "./conta";

export default class Banco {
    contas: Array<Conta>;

    constructor(contas: Array<Conta> = []) {
        this.contas = contas;
    }

    inserir(conta: Conta): void {
        if (!this.consultar(conta.numero) != null) {
            this.contas.push(conta);
        }
    }

    contaJaExiste(numero: string): boolean {
        for (let conta of this.contas) {
            if (numero == conta.numero) {
                return true
            }
        }
        return false
    }



    consultar(numero: string): any {
        if (this.contaJaExiste(numero)) {
            for (let conta of this.contas) {
                if (numero == conta.numero) {
                    return conta;
                }
            }
        }
    }

    encontraIndice(numero: string): number {
            for (let i: number = 0; i < this.contas.length; i++) {
                if (this.contas[i].numero == numero) {
                    return i;
                }
            }
        return -1;
    }

    alterar(contaBuscada: Conta): boolean {
        if (this.contaJaExiste(contaBuscada.numero)) {
            const indice: number = this.encontraIndice(contaBuscada.numero);
            this.contas[indice] = contaBuscada;
            return true;
        }
        return false;
    }


    excluir(numero: string): boolean {
        if (this.contaJaExiste(numero)){
            const indice: number = this.encontraIndice(numero);
            this.contas.splice(indice, 1);
            return true;
        }
        return false;
    }

    depositar(numero: string, valor: number) {
        let conta: Conta = this.consultar(numero);

        if (this.contaJaExiste(numero)) {
            conta.depositar(valor);
        }
    }

    sacar(numero: string, valor: number) {
        let conta: Conta = this.consultar(numero);

        if (this.contaJaExiste(numero)) {
            conta.sacar(valor);
        }
    }

    transferir(numeroCredito: string, numeroDebito: string, valor: number): boolean {

        if(this.contaJaExiste(numeroCredito) && this.contaJaExiste(numeroCredito)){
            let contaCredito: Conta = this.consultar(numeroCredito);
            let contaDebito: Conta = this.consultar(numeroDebito);
    
            contaDebito.transferir(contaCredito, valor);
        }

        return this.contaJaExiste(numeroCredito) && this.contaJaExiste(numeroCredito);
      
    }


    consultarQuantidadeContas(): number {
        return this.contas.length;
    }

    consultarTotalDepositado(): number {
        let saldo_total: number = 0;

        if (this.consultarQuantidadeContas() > 0) {
            for(let conta of this.contas){
                saldo_total += conta.consultarSaldo();
            }
        }

        return saldo_total;
    }

    consultarMediaSaldo(): number {
        let media: number = this.consultarTotalDepositado() / this.consultarQuantidadeContas();

        return media;
    }


}