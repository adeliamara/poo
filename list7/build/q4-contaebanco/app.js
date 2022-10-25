"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const io_utils_1 = require("../io_utils");
const conta_1 = __importDefault(require("./conta"));
const banco_1 = __importDefault(require("./banco"));
const poupanca_1 = __importDefault(require("./poupanca"));
const contaImposto_1 = __importDefault(require("./contaImposto"));
const cadastrarConta = (numero, valor) => {
    let conta = new conta_1.default(numero, valor);
    return banco.inserir(conta);
};
const cadastrarPoupanca = (numero, valor) => {
    console.log('Insira a taxa de juros: ');
    const taxaJuros = (0, io_utils_1.get_number)('');
    let conta = new poupanca_1.default(numero, valor, taxaJuros);
    return banco.inserir(conta);
};
const cadastrarContaImposto = (numero, valor) => {
    console.log('Insira a taxa de desconto: ');
    const taxaJuros = (0, io_utils_1.get_number)('');
    let conta = new poupanca_1.default(numero, valor, taxaJuros);
    return banco.inserir(conta);
};
function cadastrar() {
    let numero = (0, io_utils_1.input)('Digite o número da conta: ');
    let valor = (0, io_utils_1.get_number)('Digite o valor a ser depositado: ');
    console.log('Selecione o tipo de conta: 1-> Conta, 2-> Conta Poupança, 3 -> Conta imposto');
    const type = (0, io_utils_1.get_number_in_range)(1, 3);
    const cadastrarContaTipo = new Array(cadastrarConta, cadastrarPoupanca, cadastrarContaImposto);
    const operacaoBemSucedida = cadastrarContaTipo[type - 1](numero, valor);
    if (operacaoBemSucedida) {
        console.log('Operação realizada com sucesso!');
    }
    else {
        console.log('Já existe uma conta com este número');
    }
}
function consultar() {
    let numero = (0, io_utils_1.input)('Digite o número da conta: ');
    let conta = banco.consultar(numero);
    if (banco.contaJaExiste(numero)) {
        console.log(`numero: ${conta.numero} e saldo:${conta.saldo}`);
    }
    else {
        console.log(`\nConta eh invalida!\n`);
    }
    return true;
}
function sacar() {
    let numero = (0, io_utils_1.input)('Digite o número da conta a sacar: ');
    let valor = Number((0, io_utils_1.input)(`Insira o valor: `));
    return banco.debitar(numero, valor);
}
function depositar() {
    let numero = (0, io_utils_1.input)('Digite o número da conta a realizar deposito: ');
    let valor = Number((0, io_utils_1.input)(`Insira o valor: `));
    return banco.depositar(numero, valor);
}
function transferir() {
    let numeroOrigem = (0, io_utils_1.input)('Digite o número da conta de origem: ');
    let numeroDestino = (0, io_utils_1.input)('Digite o número da conta de destino: ');
    let valor = Number((0, io_utils_1.input)(`Valor: `));
    return banco.transferir(numeroOrigem, numeroDestino, valor);
}
function renderJuros() {
    let numeroConta = (0, io_utils_1.input)('Digite o número da conta: ');
    const successfulOperation = banco.renderJuros(numeroConta);
    if (successfulOperation) {
        console.log('Operação realizada com sucesso! ');
    }
    else {
        console.log('Operação falhou! Conta não é poupança. ');
    }
}
function recuperarArquivoECadasrar() {
    console.log('Realizando leitura do arquivo-contas.txt: \t');
    const fileName = 'arquivo-contas.txt';
    const arquivo_string = (0, io_utils_1.loadFile)(fileName);
    if (arquivo_string != undefined) {
        let accounts = arquivo_string.split('\n');
        let accountType;
        let numero;
        let saldo;
        for (let account of accounts) {
            let dataAccount = account.split(';');
            accountType = dataAccount[0];
            numero = dataAccount[1];
            saldo = Number(dataAccount[2]);
            let newAccount;
            if (accountType == "C") {
                newAccount = new conta_1.default(numero, saldo);
                banco.inserir(newAccount);
            }
            if (accountType == "P") {
                const taxaJuros = Number(dataAccount[3]);
                newAccount = new poupanca_1.default(numero, saldo, taxaJuros);
                banco.inserir(newAccount);
            }
            if (accountType == "CI") {
                const taxaDesconto = Number(dataAccount[3]);
                newAccount = new contaImposto_1.default(numero, saldo, taxaDesconto);
                banco.inserir(newAccount);
            }
        }
    }
}
function listarContasExistentes() {
    banco.listarContasExistentes();
}
function excluirConta() {
    const numeroConta = (0, io_utils_1.input)('Insira o numero da conta a ser excluida: ');
    const successfullOperation = banco.excluir(numeroConta);
    if (successfullOperation) {
        console.log('Operação realizada com sucesso, conta excluida! ');
    }
    else {
        console.log('Conta não existe. operação falhou! ');
    }
}
function show_menu() {
    const texto = "Selecione uma operacao:\n" +
        `\t1 - Cadastrar\n
    \t2 - Consultar\n
    \t3 - Sacar\n
    \t4 - Depositar\n
    \t5 - Transferir\n
    \t6 - Render Juros\n
    \t7 - Recuperar arquivo de cadastro \n
    \t8 - Listar Contas do banco \n
    \t9 - Exluir conta \n
    \t0 - Sair\n`;
    console.log(texto);
}
const banco = new banco_1.default();
function main() {
    const opcoes_disponiveis = new Array(cadastrar, consultar, sacar, depositar, transferir, renderJuros, recuperarArquivoECadasrar, listarContasExistentes, excluirConta);
    while (true) {
        show_menu();
        const opcao = (0, io_utils_1.get_number_in_range)(0, opcoes_disponiveis.length);
        let operacao_selecionada;
        if (opcao != 0) {
            operacao_selecionada = opcoes_disponiveis[opcao - 1];
            operacao_selecionada();
        }
        else {
            break;
        }
        (0, io_utils_1.input)('Tecle enter para continuar....');
        console.clear();
    }
}
main();
