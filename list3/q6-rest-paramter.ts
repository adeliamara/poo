/*Crie uma função exibir receba como parâmetro um “rest parameter” representando strings.
A função deve exibir no log cada um dos elementos do “rest parameter”. Chame a função
usando diferentes quantidade de parâmetros conforme abaixo:
exibir(“a”, “b”);
exibir(“a”, “b”, “c”);
exibir(“a”, “b”, “c”, “d”);*/

function exibir(...elementos: string[]): void{
    for(let letra of elementos){
        console.log(letra);
    }
}


console.log('Teste 1');
exibir('a', 'b');

console.log('Teste 2')
exibir('a', 'b', 'c');

console.log('Teste 3');
exibir('a', 'b', 'c', 'd');


