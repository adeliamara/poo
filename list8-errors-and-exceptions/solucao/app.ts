import { input, loadFile } from './io_utils'
import Conta from "./conta";
import Banco from "./banco";
import Poupanca from './poupanca';
import ContaImposto from './contaImposto';
import { AplicacaoError } from './errors/AplicacaoError';



const cadastrarConta: Function = (numero: string, valor: number) => {
    let conta: Conta = new Conta(numero, valor);
    return banco.inserir(conta);
}

const cadastrarPoupanca: Function = (numero: string, valor: number) => {
    console.log('Insira a taxa de juros: ');
    const taxaJuros = Number(input(''));
    let conta: Poupanca = new Poupanca(numero, valor, taxaJuros)
    return banco.inserir(conta)
}

const cadastrarContaImposto: Function = (numero: string, valor: number) => {
    console.log('Insira a taxa de desconto: ');
    const taxaJuros = Number(input(''));
    let conta: Poupanca = new Poupanca(numero, valor, taxaJuros)
    return banco.inserir(conta)
}

function cadastrar(): void {
    let numero: string = input('Digite o número da conta: ');
    let valor: number = Number(input('Digite o valor a ser depositado: '));

    console.log('Selecione o tipo de conta: 1-> Conta, 2-> Conta Poupança, 3 -> Conta imposto');
    const type = Number(input(''));

    const cadastrarContaTipo: Array<Function> = new Array(
        cadastrarConta,
        cadastrarPoupanca,
        cadastrarContaImposto
    )

    cadastrarContaTipo[type - 1](numero, valor);

}


function consultar(): void {
    let numero: string = input('Digite o número da conta: ');
    let conta: Conta = banco.consultar(numero);

    console.log(conta);
}

function sacar(): void {
    let numero: string = input('Digite o número da conta a sacar: ');
    let valor: number = Number(input(`Insira o valor: `));
  
    banco.debitar(numero, valor);
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

function renderJuros(): void {
    let numeroConta: string = input('Digite o número da conta: ');

    banco.renderJuros(numeroConta);
}

function recuperarArquivoECadasrar() {
    console.log('Realizando leitura do arquivo-contas.txt: \t');
    const fileName = 'arquivo-contas.txt'

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
    banco.excluir(numeroConta);    
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
        const opcao: number = Number(input(''));
        let operacao_selecionada;

        if (opcao != 0) {
            try{
                operacao_selecionada = opcoes_disponiveis[opcao - 1];
                operacao_selecionada();
            } catch (e: any) {
                console.log('Não foi possível realizar a operação! \n ' + e.message);
                if(!(e instanceof AplicacaoError)){
                    console.log('Este erro nao é reconhecido! Contate o administrador.');
                }
            }
           
        }
        else {
            break;
        }
        input('Tecle enter para continuar....')
        console.clear();
    }
}


main()