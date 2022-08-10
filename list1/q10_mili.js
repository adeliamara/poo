import { get_number, get_number_positive } from "./io_utils.js"


function main(){
    const milissegundos = get_number_positive('Insira o tempo em milissegundos: ')

    let segundos = milissegundos/1000
    let minutos = 0
    let horas = 0
    let dias = 0

    if(segundos >= 60){
        minutos = Math.trunc(segundos/60)
        segundos = Math.trunc(segundos % 60)
    }
    if(minutos >= 60){
        horas = Math.trunc(minutos/60)
        minutos = minutos % 60
    }if(horas >=24){
        dias = Math.trunc(horas/24)
        horas = horas % 60
    }

    console.log(`${dias} dias ${horas}:${minutos}:${segundos}`)

}

main()