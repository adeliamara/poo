"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const io_utils_1 = require("../io_utils");
const product_1 = __importDefault(require("./product"));
const perishableProduct_1 = __importDefault(require("./perishableProduct"));
const stock_1 = __importDefault(require("./stock"));
const insertProduct = (identifier, description, quantityProductsInStock, unitValue) => {
    let product = new product_1.default(identifier, description, quantityProductsInStock, unitValue);
    return stock.insert(product);
};
const insertPerishableProduct = (identifier, description, quantityProductsInStock, unitValue) => {
    const expirationDate = (0, io_utils_1.input)('Insira a data de validade no formato yyyy-mm-dd: ');
    let product = new perishableProduct_1.default(identifier, description, quantityProductsInStock, unitValue, expirationDate);
    return stock.insert(product);
};
function insert() {
    let identifier = (0, io_utils_1.input)('Digite o id do produto: ');
    let description = (0, io_utils_1.input)('Digite o nome do produto: ');
    let quantityProductsInStock = (0, io_utils_1.get_number)('Insira a quantidade de produtos: ');
    let unitValue = (0, io_utils_1.get_number)('Insira o valor unitário do produto: ');
    const insertProductByType = new Array(insertProduct, insertPerishableProduct);
    console.log('Selecione o tipo de produto: 1-> Produto, 2-> Produto Perecível');
    const type = (0, io_utils_1.get_number_in_range)(1, insertProductByType.length);
    const operacaoBemSucedida = insertProductByType[type - 1](identifier, description, quantityProductsInStock, unitValue);
    if (operacaoBemSucedida) {
        console.log('Operação realizada com sucesso!');
    }
    else {
        console.log('Já existe uma conta com este número');
    }
}
function searchProduct() {
    const identifier = (0, io_utils_1.input)('Digite o id desejado: ');
    let product = stock.consult(identifier);
    if (product) {
        console.log(product);
        console.log('Operação realizada com sucesso!');
    }
    else {
        console.log('Operação não realizada!');
    }
}
function writeOff() {
    const identifier = (0, io_utils_1.input)('Digite o id desejado: ');
    let product = stock.consult(identifier);
    let quantity = (0, io_utils_1.get_number)('Quantidade a dar baixar: ');
    if (product) {
        if (product instanceof perishableProduct_1.default) {
            if (product.writeOff(quantity)) {
                console.log('Operação realizada com sucesso!');
            }
            else {
                console.log('Produto vencido! Operação nao realizada. ');
            }
            return;
        }
        product.writeOff(quantity);
        console.log('Operação realizada com sucesso!');
    }
    else {
        console.log('Operação não realizada!');
    }
}
function replanish() {
    const identifier = (0, io_utils_1.input)('Digite o id desejado: ');
    let product = stock.consult(identifier);
    let quantity = (0, io_utils_1.get_number)('Quantidade para repor: ');
    if (product) {
        if (product instanceof perishableProduct_1.default) {
            if (product.replanish(quantity)) {
                console.log('Operação realizada com sucesso!');
            }
            else {
                console.log('Produto vencido! Operação nao realizada. ');
            }
            return;
        }
        product.replanish(quantity);
        console.log('Operação realizada com sucesso!');
    }
    else {
        console.log('Operação não realizada!');
    }
}
function listProducts() {
    stock.listProductsInStock();
}
function loadFileAndInsert() {
    console.log('digite o nome do arquivo com o formato: \n\texemplo: arquivo.txt: \t');
    const fileName = (0, io_utils_1.input)('> ');
    const arquivo_string = (0, io_utils_1.loadFile)(fileName);
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
            let newProduct;
            if (productType == "P") {
                newProduct = new product_1.default(identifier, description, quantity, unitValue);
                stock.insert(newProduct);
            }
            if (productType == "PP") {
                let expirationDate = dataProduct[5];
                newProduct = new perishableProduct_1.default(identifier, description, quantity, unitValue, expirationDate);
                stock.insert(newProduct);
            }
        }
    }
}
function show_menu() {
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
const stock = new stock_1.default();
function main() {
    const opcoes_disponiveis = new Array(insert, searchProduct, writeOff, replanish, listProducts, loadFileAndInsert);
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
