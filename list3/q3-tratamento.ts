/*Crie uma função que receba como parâmetros um nome e um pronome de tratamento
opcional. Caso esse último não seja fornecido, deve ser considerado o valor “Sr”. Ao final,
imprima uma saudação semelhante a “Sra. Sávia”.*/

function atribuirPronome(nome:string, pronome_tratamento: string = 'Sr.'){
    return pronome_tratamento + ' ' + nome;
}


console.log(atribuirPronome("adelia"));

console.log(atribuirPronome("Sávia", "Sra."));
