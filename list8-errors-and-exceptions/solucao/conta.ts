import { ValorInvalidoException } from "./errors/ValorInvalidoException";
import { SaldoInsuficienteError } from "./errors/SaldoInsuficienteError";
import { InputInvalidoError } from "./errors/InputInvalidoError";

export default class Conta {
    private _numero: string;
    private _saldo: number;
    
    constructor(_numero: string, _saldo: number = 0){
        this.validaValor(_saldo);
        this._saldo = _saldo;
        this._numero = _numero;
    }

   
    public get numero() : string {
        return this._numero;
    }
    
    public get saldo() : number {
        return this._saldo;
    }
        

    public debitar(valor: number): void {
        this.validaValor(valor);
        this.validaSaldo(this.saldo, valor);
        this._saldo = this._saldo - valor;
    }

    public depositar(valor: number): void {
        this.validaValor(valor);
        this._saldo = this._saldo + valor;
    }


    public transferir(contaDestino: Conta, valor: number): void {
        this.debitar(valor);
        contaDestino.depositar(valor);
    }

    private validaValor(valor: Number): void{
        this.validaInput(valor);
        if(valor <= 0){
            throw new ValorInvalidoException("O valor depositado deve ser positivo"); 
        }
    }

    private validaSaldo(saldo: Number, valor: Number): void {
        this.validaInput(saldo);
        this.validaInput(valor);
        if(saldo < 0 || valor > saldo){
            throw new SaldoInsuficienteError("O saldo nao foi suficiente para finalizar a operação!"); 
        }
    }

    private validaInput(input: Number){
        if(isNaN(Number(input))){
            throw new InputInvalidoError("O dado de entrada deve ser um numero.")
        }
    }

}
