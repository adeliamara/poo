import Conta from "./conta";

export default class ContaImposto extends Conta {
    private _taxaDesconto: number;

    constructor(numero: string, saldo: number, taxaDeDesconto: number) {
        super(numero, saldo);
        this._taxaDesconto = taxaDeDesconto;
    }
    
    //override
    public debitar(valor: number): boolean {
        const valor_descontado = valor * (1 + this._taxaDesconto / 100);
        if (valor_descontado <= this.saldo) {
            this.saldo = this.saldo - valor_descontado;
            return true;
        }
        return false;
    }

}