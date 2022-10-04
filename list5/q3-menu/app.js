"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const input = require('prompt-sync')();
const print = (message) => console.log(message);
const conta_js_1 = __importDefault(require("../q1/conta.js"));
const banco_js_1 = __importDefault(require("../q1/banco.js"));
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
    print("\nCadastrar conta\n");
    let numero = input('Digite o número da conta: ');
    let titular = input('Digite o seu nome: ');
    let conta;
    conta = new banco_js_1.default(titular, numero);
    banco.inserir(conta);
}
function consultar() {
    print("\nConsultar conta\n");
    let numero = input('Digite o número da conta: ');
    let conta = banco.consultar(numero);
    if (conta != undefined) {
        print(`\nTitular: ${conta.titular}, numero: ${conta.numero}\n`);
    }
    else {
        print(`\nConta não encontrada!\n`);
    }
}
function sacar() {
    print("\nSaque\n");
    let numero = input('Digite o número da conta: ');
    let valor = Number(input(`Valor: `));
    banco.sacar(numero, valor);
}
function depositar() {
    print("\nDepósito\n");
    let numero = input('Digite o número da conta: ');
    let valor = Number(input(`Valor: `));
    banco.depositar(numero, valor);
}
function transferir() {
    print("\nTransferência\n");
    let numeroCredito = input('Digite o número da conta a ser creditada: ');
    let numeroDebito = input('Digite o número da conta a ser debitada: ');
    let valor = input(`Valor: `);
    banco.transferir(numeroCredito, numeroDebito, valor);
}
function excluir() {
    print("\nExcluir conta\n");
    let numero = input('Digite o número da conta: ');
    let exclusao = input('Confirmar (S/N): ');
    if (exclusao.toLocaleUpperCase() == 'S') {
        banco.excluir(numero);
        print("conta excluída");
    }
    else if (exclusao.toLocaleUpperCase() == 'N') {
        print("conta mantida");
    }
}
const banco = new conta_js_1.default();
const texto_menu = "Selecione uma operacao:\n" +
    "\t1 - Cadastrar\n\t2 - Consultar\n\t3 - Sacar\n\t4 - Depositar\n\t5 - Excluir6 - Transferir\n\t0 - Sair\n";
while (true) {
    const opcao = get_number_in_range(texto_menu, 0, 6);
    if (opcao != 0) {
        if (opcao == 1)
            cadastrar();
        if (opcao == 2)
            consultar();
        if (opcao == 3)
            excluir();
        if (opcao == 4)
            sacar();
        if (opcao == 5)
            depositar();
        if (opcao == 6)
            transferir();
    }
    else {
        break;
    }
    input("Operação finalizada. Digite <enter>");
    console.clear();
}
