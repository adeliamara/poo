export class Conta {
    private _nome: string;
    private _saldo: number;


    constructor(nome: string, saldo: number = 0 ){
        this._nome = nome;
        this._saldo = saldo;
    }

    
    public get nome() : string {
        return this._nome;
    }

    
    public set nome(nome : string) {
        this._nome = nome;
    }

    public get saldo() : number {
        return this._saldo;
    }

    
    public set saldo(saldo : number) {
        this._saldo = saldo;
    }
    
    
    
}