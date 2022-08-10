import { get_number, input } from "./io_utils.js";

function main(){
    const startPoint = get_number('Insira o ponto inicial: ')
    const endPoint = get_number('Insira o ponto final: ')

    for(var index = startPoint + 1; index < endPoint; index++){
        console.log(index)
    }

}

main()