import Conta from "./conta";

export default class ContaImposto extends Conta {
    private _taxaDesconto: number;

    constructor(numero: string, saldo: number, taxaDeDesconto: number) {
        super(numero, saldo);
        this._taxaDesconto = taxaDeDesconto;
    }
    
    //override
    public debitar(valor: number): void {
        const valor_descontado = valor * (1 + this._taxaDesconto / 100);
        super.debitar(valor_descontado);
    }

    public depositar(valor: number): void {
        const valor_depositado = valor * (1 - this._taxaDesconto / 100);
        super.depositar(valor_depositado);
    }


}