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
    
    public set saldo(value: number) {
        this._saldo = value;
    }
    
 

    public debitar(valor: number): boolean {
        if (valor <= this._saldo) {
            this._saldo = this._saldo - valor;
            return true;
        }
        return false;
        
    }

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }


    public transferir(contaDestino: Conta, valor: number): boolean {
        if (this.debitar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;

    }
}
