import prompt from 'prompt-sync'
import * as fs from 'fs'

export const input = prompt({
    sigint: false
})

export function get_number_in_range(minimo: number, maximo: number): number {
    let number: number = get_number();

    while (number < minimo || number > maximo) {
        console.log(`O número (${number}) nao esta dentro do intervalo [${minimo}, ${maximo}]. Digite um numero dentro do intervalo: `)
        number = get_number();
    }

    return number;

}

export function get_number(msg: string = ''): number {
    let value: number = Number(input(msg));
    if (isNaN(value)) {
        console.log('\n ****** Favor digite um valor numérico ****** \n');
        value = get_number(msg)
    }
    return value;
}

export function loadFile(fileName: string) {
    try {
        const data = fs.readFileSync(fileName, 'utf-8')
        return data;
    } catch (error) {
        console.error(error)
    }
}

