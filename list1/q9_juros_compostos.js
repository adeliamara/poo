import prompt from 'prompt-sync'
import { get_number } from './io_utils.js'
const input = prompt()


function main(){
    const valorAplicado = get_number('Insira o valor aplicado: ')
    const taxaJuros = get_number('Insira a taxa de juros: ')

    const valorComJurosMeses = new Array(12)

    let valorComJuros

    for (let index = 0; index < valorComJurosMeses.length; index++) {
        valorComJuros = valorAplicado * ((1 + taxaJuros) ** (index + 1))
        console.log(valorComJuros)
        valorComJurosMeses[index]  = valorComJuros
    }

    for (let index = 0; index < valorComJurosMeses.length; index++) {
        console.log(`mes ${index + 1}: valor com juros R$ ${valorComJurosMeses[index].toFixed(4)}`)
        
    }

}

main()