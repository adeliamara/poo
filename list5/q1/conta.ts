export default class Conta {
    numero: string;
    saldo: number;
    
    constructor(numero: string, saldo: number = 0){
        this.saldo = saldo;
        this.numero = numero;
    }

    sacar(valor: number): boolean {
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
        }
        return valor <= this.saldo

    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
        }
        return valor <= this.saldo;

    }
}

let conta1: Conta = new Conta("1", 100);
let conta2: Conta = new Conta("2", 50);

console.log(conta1.sacar(10));
console.log(conta1.consultarSaldo());
console.log(conta1.sacar(100));
console.log(conta1.consultarSaldo());
console.log(conta1.transferir(conta2,10));
console.log(conta1.consultarSaldo());
console.log(conta2.consultarSaldo());
console.log(conta1.transferir(conta2,100));
console.log(conta1.consultarSaldo());
console.log(conta2.consultarSaldo());