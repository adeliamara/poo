const input = require('prompt-sync')();
const print = (message: string) => console.log(message);
import Banco from "../q1/conta.js";
import Conta from "../q1/banco.js";
function get_number_in_range(mensagem, minimo, maximo){
    let number = get_number(mensagem)
    
    while (number < minimo || number > maximo){
        console.log(`O número (${number}) nao esta dentro do intervalo [${minimo}, ${maximo}]. Digite um numero dentro do intervalo: `)
        number = get_number(mensagem)
    }

    return number

}

function get_number(msg) {
    let value = Number(input(msg))
    if (isNaN(value)) {
        console.log('Favor digite um valor numérico')
        value = get_number(msg)
    }
    return value
}




function cadastrar(): void {
    print("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta: ');
    let titular: string = input('Digite o seu nome: ');
        
        let conta: Conta;
        conta = new Conta(titular, numero);
        banco.inserir(conta);
    }


function consultar(): void {
    print("\nConsultar conta\n");
    let numero: string = input('Digite o número da conta: ');
    let conta: Conta = banco.consultar(numero);

    if(conta != undefined) {
        print(`\nTitular: ${conta.titular}, numero: ${conta.numero}\n`);
    } else {
        print(`\nConta não encontrada!\n`);
        
    }
}

function sacar():void  {
    print("\nSaque\n");
    
    let numero: string = input('Digite o número da conta: ');
    let valor: number = Number(input(`Valor: `));
    banco.sacar(numero,valor);
}

function depositar(): void {
    print("\nDepósito\n");
    let numero: string = input('Digite o número da conta: ');
    let valor: number = Number(input(`Valor: `));
    banco.depositar(numero,valor);
}

function transferir(): void {
    print("\nTransferência\n");
    let numeroCredito: string = input('Digite o número da conta a ser creditada: ');
    let numeroDebito: string = input('Digite o número da conta a ser debitada: ');
    let valor: number = input(`Valor: `);
    banco.transferir(numeroCredito, numeroDebito, valor);
}


function excluir(): void {
    print("\nExcluir conta\n");
    let numero: string = input('Digite o número da conta: ');
    
    let exclusao: string = input('Confirmar (S/N): ');
    
    if( exclusao.toLocaleUpperCase() == 'S') {
        banco.excluir(numero);
        print("conta excluída")
    } else if(exclusao.toLocaleUpperCase() == 'N') {
        print("conta mantida")
    }
}

const banco: Banco = new Banco();
    
const texto_menu: string =
    "Selecione uma operacao:\n" +
    "\t1 - Cadastrar\n\t2 - Consultar\n\t3 - Sacar\n\t4 - Depositar\n\t5 - Excluir6 - Transferir\n\t0 - Sair\n";
    
while (true) {
    const opcao: number = get_number_in_range(texto_menu,0,6);
    
        if(opcao != 0) {
           if(opcao == 1) cadastrar();
           if(opcao == 2) consultar();
           if(opcao == 3) excluir();
           if(opcao == 4) sacar();
           if(opcao == 5) depositar();
           if(opcao == 6) transferir();

        } 
        else {break;}


    input("Operação finalizada. Digite <enter>");

    console.clear();
}