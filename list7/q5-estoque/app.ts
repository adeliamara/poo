import { input, get_number_in_range, get_number, loadFile } from '../io_utils'
import Product from './product';
import PerishableProduct from './perishableProduct';
import Stock from './stock';
import { write } from 'fs';

const insertProduct: Function = (identifier: string, description: string, quantityProductsInStock: number, unitValue: number) => {
    let product: Product = new Product(identifier, description, quantityProductsInStock, unitValue);
    return stock.insert(product);
}

const insertPerishableProduct: Function = (identifier: string, description: string, quantityProductsInStock: number, unitValue: number) => {
    const expirationDate: string = input('Insira a data de validade no formato yyyy-mm-dd: ');
    let product: PerishableProduct = new PerishableProduct(identifier, description, quantityProductsInStock, unitValue, expirationDate);
    return stock.insert(product);
}

function insert(): void {
    let identifier: string = input('Digite o id do produto: ');
    let description: string = input('Digite o nome do produto: ');
    let quantityProductsInStock: number = get_number('Insira a quantidade de produtos: ');
    let unitValue: number = get_number('Insira o valor unitário do produto: ');
    
    const insertProductByType: Array<Function> = new Array(
        insertProduct,
        insertPerishableProduct
    )
    
    console.log('Selecione o tipo de produto: 1-> Produto, 2-> Produto Perecível');
    const type = get_number_in_range(1, insertProductByType.length);

    const operacaoBemSucedida = insertProductByType[type - 1](identifier, description, quantityProductsInStock, unitValue);

    if (operacaoBemSucedida) {
        console.log('Operação realizada com sucesso!');
    } else {
        console.log('Já existe uma conta com este número')
    }
}

function searchProduct(): void{
    const identifier = input('Digite o id desejado: ')
    let product: Product = stock.consult(identifier);
   
    if(product){
        console.log(product);
        console.log('Operação realizada com sucesso!')
    }else{
        console.log('Operação não realizada!');
    }
}

function writeOff(): void{
    const identifier = input('Digite o id desejado: ')
    let product: Product = stock.consult(identifier);
    let quantity: number = get_number('Quantidade a dar baixar: ');
    if(product){
        if(product instanceof PerishableProduct){
            if((<PerishableProduct> product).writeOff(quantity)){
                console.log('Operação realizada com sucesso!')
            }else{
                console.log('Produto vencido! Operação nao realizada. ')
            }
            return;
        }
        product.writeOff(quantity);
        console.log('Operação realizada com sucesso!')
    }else{
        console.log('Operação não realizada!');
    }
}

function replanish(): void{
    const identifier = input('Digite o id desejado: ')
    let product: Product = stock.consult(identifier);
    let quantity: number = get_number('Quantidade para repor: ');

    if(product){
        if(product instanceof PerishableProduct){
            if((<PerishableProduct> product).replanish(quantity)){
                console.log('Operação realizada com sucesso!')
            }else{
                console.log('Produto vencido! Operação nao realizada. ')
            }
            return;
        }
        product.replanish(quantity);
        console.log('Operação realizada com sucesso!')
    }else{
        console.log('Operação não realizada!');
    }
}

function listProducts(): void{
    stock.listProductsInStock();
}

function loadFileAndInsert() {
    console.log('digite o nome do arquivo com o formato: \n\texemplo: arquivo.txt: \t');
    const fileName = input('> ');

    const arquivo_string: string | undefined = loadFile(fileName);

    if (arquivo_string != undefined) {
        let products = arquivo_string.split('\n');
        let productType;
        let identifier;
        let description;
        let unitValue;
        let quantity;

        for (let product of products) {
            let dataProduct = product.split(';');
            productType = dataProduct[0];
            identifier = dataProduct[1];
            description = dataProduct[2];
            quantity = Number(dataProduct[3]);
            unitValue = Number(dataProduct[4]);

            let newProduct: Product;
            if (productType == "P") {
                newProduct = new Product(identifier, description,quantity, unitValue);
                stock.insert(newProduct);
            }
            if (productType == "PP") {
                let expirationDate = dataProduct[5];
                newProduct = new PerishableProduct(identifier, description,quantity, unitValue, expirationDate);
                stock.insert(newProduct);
            }
          
        }
    }

}


function show_menu(): void {
    const texto = "Selecione uma operacao:\n" +
        `\t1 - Cadastrar produto\n
    \t2 - Consultar produto\n
    \t3 - Dar baixa produto \n
    \t4 - Repor produto\n
    \t5 - Listar produtos \n
    \t6 - Carregar arquivo produtos \n
    \t0 - Sair\n`;
    console.log(texto);
}

const stock: Stock = new Stock();

function main() {
    const opcoes_disponiveis: Array<Function> = new Array(
        insert,
        searchProduct,
        writeOff, 
        replanish,
        listProducts,
        loadFileAndInsert
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