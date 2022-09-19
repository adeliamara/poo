import {get_number_positive, input} from './io_utils.js'

function main(){
    const valueBRL = get_number_positive('Insira o valor em reais: ')

    const ratioBitcoin = 0.00000843

    const valueBitcoin = valueBRL * ratioBitcoin

    console.log(`Atualmente, 1 real vale ${ratioBitcoin.toFixed(8)} bitcoins`)
    console.log(`R$ ${valueBRL.toFixed(8)} = ${valueBitcoin.toFixed(8)} bitcoins`)

}

main()