import { get_number, get_number_positive } from './io_utils.js';


function main() {
    const vetor = new Array(5)

    for(let index = 0; index < vetor.length; index++){
        vetor[index] = get_number('Insira um numuero: ')
    }
    console.log('Vetor original: ' + vetor)
    sortArrayBubble(vetor, 'asc')
    console.log('Vetor crescente: ' + vetor)
    sortArrayBubble(vetor, 'desc')
    console.log('Vetor decrescente: ' + vetor)
    

}

function sortArrayBubble(array, ordem = 'asc') {

    let comparador = ordem === 'asc' ? eh_maior : eh_menor
    let ocorreuTroca = false
    let auxiliar
    let contador = 0

    for (let index = 0; index < array.length; index++) {
        ocorreuTroca = false
        for (let j = 0; j < array.length - index; j++) {
            contador += 1

            if (comparador(array[j], array[j + 1])) {
                auxiliar = array[j]
                array[j] = array[j + 1]
                array[j + 1] = auxiliar
                ocorreuTroca = true
            }
        }

        if (!ocorreuTroca) {
            break
        }

    }
}

const eh_maior = (v1, v2) => v1 > v2
const eh_menor = (v1, v2) => v1 < v2

main()