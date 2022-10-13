export default class Conta {
    private _numero: string;
    private _saldo: number;
    
    constructor(_numero: string, _saldo: number = 0){
        this._saldo = _saldo;
        this._numero = _numero;
    }

   
    public get numero() : string {
        return this._numero;
    }
    public get saldo() : number {
        return this._saldo;
    }
 

    public sacar(valor: number): boolean {
        if (valor <= this._saldo) {
            this._saldo = this._saldo - valor;
        }
        return valor <= this._saldo

    }

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }


    public transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
        }
        return valor <= this._saldo;

    }
}
