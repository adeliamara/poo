import { get_number_in_range } from './io_utils.js'

function main() {
    const mes = get_number_in_range('Insira o mes: ', 1, 12)

    const mesesExtenso = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    let dias
    if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes == 12) {
        dias = 31
    } else if (mes === 2) {
        dias = 28
    } else {
        dias = 30
    }

    console.log(`O mes ${mes} equivale a ${mesesExtenso[mes - 1]} e possui ${dias} dias`)
}

main()