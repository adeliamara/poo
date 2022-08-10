  import {get_random_number, input} from './io_utils.js'

function main(){
    const numA = Number(input('Insira o numero: '))
    const numB = Number(input('Insira o numero: '))
    const numC = Number(input('Insira o numero: '))

    let maior = numA
    let menor = numA

    if(numB > maior){
        maior = numB
    }
    if(numC > maior){
        maior = numC
    }

    if(numB < menor){
        menor = numB
    }
    if(numC < menor){
        menor = numC
    }


    console.log('maior: '+ maior)
    console.log('menor: '+ menor)
}


main()