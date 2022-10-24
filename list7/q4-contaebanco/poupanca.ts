import Conta from "./conta"

export default class Poupanca extends Conta{
    private _taxaJuros: number;

    constructor(numero: string, saldo: number, taxaJuros: number){
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }

    public renderJuros(): void {
        this.depositar(this.saldo * this._taxaJuros/100);
    }
}