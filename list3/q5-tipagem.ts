function soma(x: number, y?: any): number {
    //console.log("y:", y)
    return x + y
}

console.log(soma(1, 2));
//ambos são do tipo number, então resulta em um numero

console.log(soma(1, "2"));
//o "2" é do tipo string, logo ocorre uma concatencao de 1 com 2    

console.log(soma(1));

//o segundo parametro foi definido como opcional na funcao, mas não possui nenhum valor default. Assim,
//dentro da funcao foi executao 1 + undefined = NaN