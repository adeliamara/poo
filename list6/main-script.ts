import Banco from "./q3-banco";
import Conta  from "./q4-conta";

function main(){
    let meliuz: Banco = new Banco();

    let conta1: Conta = new Conta("001", 101);
    let conta2: Conta = new Conta("002", 100)
    
    meliuz.inserir(conta1);
    meliuz.inserir(conta2);
    
    console.log(meliuz.consultar('001'));
    
    console.log('conta 1 antes transferencia: ')
    console.log(conta1.saldo)
    console.log('conta 2 antes transferencia: ')
    console.log(conta2.saldo)

    console.log('transferencia feita:' ,conta1.transferir(conta2, 20));

    console.log('conta 1 apos transferencia: ')
    console.log(conta1.saldo)
    console.log('conta 2 apos transferencia: ')
    console.log(conta2.saldo)

    console.log(`media saldo = ${meliuz.consultarMediaSaldo()}`);
    console.log(`quantidad de contas: ${meliuz.consultarQuantidadeContas()}`);
    console.log(`total depositado= ${meliuz.consultarTotalDepositado()}`);
    
    console.log('saldo antes deposito 50,00 c1: ');
    console.log(meliuz.consultar('001').saldo);
    meliuz.depositar("001",50);
    console.log('saldo apos deposito: ');
    console.log(meliuz.consultar('001').saldo);
}

main()

