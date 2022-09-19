import {get_random_number, input} from './io_utils.js'

function main(){
    const num = Number(input('Insira o numero: '))
    let numSuperior
    let numInferior

    if(ehInteiro(num)){
        numInferior = num - 1
        numSuperior = num + 1
    }else{
        numInferior = Math.floor(num)
        numSuperior = Math.ceil(num)
    }


    console.log(`Numero inferior é ${numInferior} e numero superior é ${numSuperior}`)

}

const ehInteiro = num => num % 1 === 0

main()