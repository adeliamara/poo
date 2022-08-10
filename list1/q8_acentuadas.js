import prompt from 'prompt-sync'
import { get_number, get_text, loadfile } from './io_utils.js'
const input = prompt()

function main() {
    const textoOriginal = loadfile('arquivo_q8.txt')//input('Insira o texto: ')
    const novoTexto = substituirAcentosTexto(textoOriginal)

    console.log('texto original:' + textoOriginal)
    console.log('novo texto: ' + novoTexto)
}

function substituirAcentosTexto(texto) {
    let novoTexto

    for (let letra of texto) {
        novoTexto = novoTexto + substituirAcentoCaracter(letra)
    }
    return novoTexto
}

function substituirAcentoCaracter(letra) {
    let letrasComAcentos = "ÄÅÁÂÀÃäáâàãÉÊËÈéêëèÍÎÏÌíîïìÖÓÔÒÕöóôòõÜÚÛüúûùÇç";
    let letrasSemAcentos = "AAAAAAaaaaaEEEEeeeeIIIIiiiiOOOOOoooooUUUuuuuCc";

    for (let i = 0; i < letrasComAcentos.length; i++) {
        if (letrasComAcentos[i] === letra) {
            return letrasSemAcentos[i]
        }
    }

    return letra
}


main()