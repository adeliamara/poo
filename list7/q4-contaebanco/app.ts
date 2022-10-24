import { input, get_number_in_range, get_number, loadFile } from '../io_utils'
import Conta from "./conta";
import Banco from "./banco";
import Poupanca from './poupanca';
import ContaImposto from './contaImposto';



const cadastrarConta: Function = (numero: string, valor: number) => {
    let conta: Conta = new Conta(numero, valor);
    return banco.inserir(conta);
}

const cadastrarPoupanca: Function = (numero: string, valor: number) => {
    console.log('Insira a taxa de juros: ');
    const taxaJuros = get_number('');
    let conta: Poupanca = new Poupanca(numero, valor, taxaJuros)
    return banco.inserir(conta)
}

const cadastrarContaImposto: Function = (numero: string, valor: number) => {
    console.log('Insira a taxa de desconto: ');
    const taxaJuros = get_number('');
    let conta: Poupanca = new Poupanca(numero, valor, taxaJuros)
    return banco.inserir(conta)
}

function cadastrar(): void {
    let numero: string = input('Digite o número da conta: ');
    let valor: number = get_number('Digite o valor a ser depositado: ');

    console.log('Selecione o tipo de conta: 1-> Conta, 2-> Conta Poupança, 3 -> Conta imposto');
    const type = get_number_in_range(1, 3);

    const cadastrarContaTipo: Array<Function> = new Array(
        cadastrarConta,
        cadastrarPoupanca,
        cadastrarContaImposto
    )

    const operacaoBemSucedida = cadastrarContaTipo[type - 1](numero, valor);

    if (operacaoBemSucedida) {
        console.log('Operação realizada com sucesso!');
    } else {
        console.log('Já existe uma conta com este número')
    }
}


function consultar(): boolean {
    let numero: string = input('Digite o número da conta: ');
    let conta: Conta = banco.consultar(numero);

    if (banco.contaJaExiste(numero)) {
        console.log(`numero: ${conta.numero} e saldo:${conta.saldo}`);
    } else {
        console.log(`\nConta eh invalida!\n`);
    }

    return true;
}

function sacar(): boolean {
    let numero: string = input('Digite o número da conta a sacar: ');
    let valor: number = Number(input(`Insira o valor: `));
    return banco.debitar(numero, valor);
}

function depositar(): boolean {
    let numero: string = input('Digite o número da conta a realizar deposito: ');
    let valor: number = Number(input(`Insira o valor: `));
    return banco.depositar(numero, valor);
}

function transferir(): boolean {
    let numeroOrigem: string = input('Digite o número da conta de origem: ');
    let numeroDestino: string = input('Digite o número da conta de destino: ');
    let valor: number = Number(input(`Valor: `));
    return banco.transferir(numeroOrigem, numeroDestino, valor);
}

function renderJuros(): void {
    let numeroConta: string = input('Digite o número da conta: ');

    const successfulOperation = banco.renderJuros(numeroConta);

    if (successfulOperation) {
        console.log('Operação realizada com sucesso! ')
    } else {
        console.log('Operação falhou! Conta não é poupança. ')
    }
}

function recuperarArquivoECadasrar() {
    console.log('digite o nome do arquivo com o formato: \n\texemplo: arquivo.txt: \t');
    const fileName = input('> ');

    const arquivo_string: string | undefined = loadFile(fileName);

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

            let newAccount: Conta;
            if (accountType == "C") {
                newAccount = new Conta(numero, saldo);
                banco.inserir(newAccount);
            }
            if (accountType == "P") {
                const taxaJuros = Number(dataAccount[3]);
                newAccount = new Poupanca(numero, saldo, taxaJuros);
                banco.inserir(newAccount);
            }
            if (accountType == "CI") {
                const taxaDesconto = Number(dataAccount[3]);
                newAccount = new ContaImposto(numero, saldo, taxaDesconto);
                banco.inserir(newAccount);
            }
        }
    }

}

function listarContasExistentes() {
    banco.listarContasExistentes();
}

function excluirConta(): void {
    const numeroConta: string = input('Insira o numero da conta a ser excluida: ')
    const successfullOperation: boolean = banco.excluir(numeroConta);

    if(successfullOperation){
        console.log('Operação realizada com sucesso, conta excluida! ');
    }else{
        console.log('Conta não existe. operação falhou! ');
    }
    
    
}

function show_menu(): void {
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

const banco: Banco = new Banco();

function main() {
    const opcoes_disponiveis: Array<Function> = new Array(
        cadastrar,
        consultar,
        sacar,
        depositar,
        transferir,
        renderJuros,
        recuperarArquivoECadasrar,
        listarContasExistentes,
        excluirConta
    )

    while (true) {
        show_menu();
        const opcao: number = get_number_in_range(0, opcoes_disponiveis.length);
        let operacao_selecionada;

        if (opcao != 0) {
            operacao_selecionada = opcoes_disponiveis[opcao - 1];
            operacao_selecionada();
        }
        else {
            break;
        }
        input('Tecle enter para continuar....')
        console.clear();
    }
}


main()