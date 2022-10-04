import prompt from 'prompt-sync'

const input = prompt({
    sigint: false
})

import Conta from "../q1/conta";
import Banco from "../q1/banco";

function get_number_in_range(mensagem: string, minimo: number, maximo: number): number {
    let number: number = get_number(mensagem)

    while (number < minimo || number > maximo) {
        console.log(`O número (${number}) nao esta dentro do intervalo [${minimo}, ${maximo}]. Digite um numero dentro do intervalo: `)
        number = get_number(mensagem)
    }

    return number

}

function get_number(msg: string): number {
    let value: number = Number(input(msg))
    if (isNaN(value)) {
        console.log('Favor digite um valor numérico')
        value = get_number(msg)
    }
    return value
}




function cadastrar(): void {
    let numero: string = input('Digite o número da conta: ');

    let conta: Conta = new Conta(numero);
    banco.inserir(conta);
}


function consultar(): void {
    let numero: string = input('Digite o número da conta: ');
    let conta: Conta = banco.consultar(numero);

    if (banco.contaJaExiste(numero)) {
        console.log(`numero: ${conta.numero} e saldo:${conta.saldo}`);
    } else {
        console.log(`\nConta eh invalida!\n`);

    }
}

function sacar(): void {
    let numero: string = input('Digite o número da conta a sacar: ');
    let valor: number = Number(input(`Insira o valor: `));
    banco.sacar(numero, valor);
}

function depositar(): void {
    let numero: string = input('Digite o número da conta a realizar deposito: ');
    let valor: number = Number(input(`Insira o valor: `));
    banco.depositar(numero, valor);
}

function transferir(): void {
    let numeroOrigem: string = input('Digite o número da conta de origem: ');
    let numeroDestino: string = input('Digite o número da conta de destino: ');
    let valor: number = Number(input(`Valor: `));
    banco.transferir(numeroOrigem, numeroDestino, valor);
}




const banco: Banco = new Banco();

function main() {


    const texto_menu: string =
        "Selecione uma operacao:\n" +
        "\t1 - Cadastrar\n\t2 - Consultar\n\t3 - Sacar\n\t4 - Depositar\n\t5 - Transferir\n\t0 - Sair\n";

    while (true) {
        const opcao: number = get_number_in_range(texto_menu, 0, 6);

        if (opcao != 0) {
            if (opcao == 1) cadastrar();
            if (opcao == 2) consultar();
            if (opcao == 3) sacar();
            if (opcao == 4) depositar();
            if (opcao == 5) transferir();
        }
        else {
            break;
        }


        input("Operação realizada com sucesso. Tecle enter...");

        console.clear();
    }
}


main()