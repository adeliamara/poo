import prompt from 'prompt-sync'
import { get_number } from './io_utils.js'
const input = prompt()

function main() {
    let valorAtual = 0
    const vetorNumeros = []

    while(valorAtual != -1){
        valorAtual  = get_number('Insira o numero: ')
        valorAtual === -1 ? valorAtual = -1 : vetorNumeros.push(valorAtual)
    }

    const media = calculaMediaVetor(vetorNumeros)
    const desvioPadrao = calculaDesvioPadraoVetor(vetorNumeros)

    console.log(`media = ${media}`)
    console.log(`desvio padrao = ${desvioPadrao}`)
}

const calculaMediaVetor = vetor => vetor.reduce((soma, num) => soma += num, 0) / vetor.length;

function calculaDesvioPadraoVetor(vetor){
    const media = calculaMediaVetor(vetor)
    const variancia = vetor.reduce((soma, num) => soma + Math.pow(media - num, 2)/vetor.length, 0)
    const desvioPadrao = Math.sqrt(variancia)

    return desvioPadrao
}

main()