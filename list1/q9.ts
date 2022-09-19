class SituacaoFinanceira  {
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    saldo(): number {
        return this.valorCreditos - this.valorDebitos
    }
}

let contaTeste = new SituacaoFinanceira;
contaTeste.valorCreditos = 10;
contaTeste.valorDebitos = 10;

console.log(`Saldo = ${contaTeste.saldo()}`)