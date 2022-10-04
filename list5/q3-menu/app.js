"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)({
    sigint: false
});
const conta_1 = __importDefault(require("../q1/conta"));
const banco_1 = __importDefault(require("../q1/banco"));
function get_number_in_range(mensagem, minimo, maximo) {
    let number = get_number(mensagem);
    while (number < minimo || number > maximo) {
        console.log(`O número (${number}) nao esta dentro do intervalo [${minimo}, ${maximo}]. Digite um numero dentro do intervalo: `);
        number = get_number(mensagem);
    }
    return number;
}
function get_number(msg) {
    let value = Number(input(msg));
    if (isNaN(value)) {
        console.log('Favor digite um valor numérico');
        value = get_number(msg);
    }
    return value;
}
function cadastrar() {
    let numero = input('Digite o número da conta: ');
    let conta = new conta_1.default(numero);
    banco.inserir(conta);
}
function consultar() {
    let numero = input('Digite o número da conta: ');
    let conta = banco.consultar(numero);
    if (banco.contaJaExiste(numero)) {
        console.log(`numero: ${conta.numero} e saldo:${conta.saldo}`);
    }
    else {
        console.log(`\nConta eh invalida!\n`);
    }
}
function sacar() {
    let numero = input('Digite o número da conta a sacar: ');
    let valor = Number(input(`Insira o valor: `));
    banco.sacar(numero, valor);
}
function depositar() {
    let numero = input('Digite o número da conta a realizar deposito: ');
    let valor = Number(input(`Insira o valor: `));
    banco.depositar(numero, valor);
}
function transferir() {
    let numeroOrigem = input('Digite o número da conta de origem: ');
    let numeroDestino = input('Digite o número da conta de destino: ');
    let valor = Number(input(`Valor: `));
    banco.transferir(numeroOrigem, numeroDestino, valor);
}
const banco = new banco_1.default();
function main() {
    const texto_menu = "Selecione uma operacao:\n" +
        "\t1 - Cadastrar\n\t2 - Consultar\n\t3 - Sacar\n\t4 - Depositar\n\t5 - Transferir\n\t0 - Sair\n";
    while (true) {
        const opcao = get_number_in_range(texto_menu, 0, 6);
        if (opcao != 0) {
            if (opcao == 1)
                cadastrar();
            if (opcao == 2)
                consultar();
            if (opcao == 3)
                sacar();
            if (opcao == 4)
                depositar();
            if (opcao == 5)
                transferir();
        }
        else {
            break;
        }
        input("Operação realizada com sucesso. Tecle enter...");
        console.clear();
    }
}
main();
