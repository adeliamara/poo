import prompt from 'prompt-sync'
import * as fs from 'fs'

export const input = prompt({
    sigint: false
})

export function print(mensagem, ...optionalParams){
    console.log(mensagem, ...optionalParams)
}


export function loadfile(arquivo) {
    try {
        const data = fs.readFileSync(arquivo, 'utf-8')
        return data
    } catch (error) {
        console.error(error)
    }
}


export function get_number(msg) {
    let value = Number(input(msg))
    if (isNaN(value)) {
        console.log('Favor digite um valor numérico')
        value = get_number(msg)
    }
    return value
}

export function get_number_positive(msg){
    let number = get_number(msg)
    
    while (!(number >= 0)){
        console.log(`O número (${number}) nao é positivo. Digite um numero positivo`)
        number = get_number(msg)
    }

    return number

}

export function get_text(msg) {
    const value = input(msg)
    if (value.length === 0) {
        console.log('Texto vazio. Digite algo.')
        return get_text(msg)
    }
    return value
}

export function get_random_number(min = 0, max = 100){
    return Math.round(Math.random() * (max - min)) + min
}

export function get_number_negative(mensagem){
    let number = get_number(mensagem)
    
    while (!(number < 0)){
        console.log(`O número (${number}) nao é positivo. Digite um numero positivo: `)
        number = get_number(mensagem)
    }

    return number

}

export function get_number_in_range(mensagem, minimo, maximo){
    let number = get_number(mensagem)
    
    while (number < minimo || number > maximo){
        console.log(`O número (${number}) nao esta dentro do intervalo [${minimo}, ${maximo}]. Digite um numero dentro do intervalo: `)
        number = get_number(mensagem)
    }

    return number

}