"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
const perishableProduct_1 = __importDefault(require("./perishableProduct"));
class Stock {
    constructor(products = []) {
        this._products = [];
        this._products = products;
    }
    insert(product) {
        if (this.searchIndex(product.identifier) != -1 || this.searchIndex(product.identifier) != -1) {
            return false;
        }
        this._products.push(product);
        return true;
    }
    searchIndex(identifier) {
        let index = -1;
        for (let i = 0; i < this._products.length; i++) {
            if (this._products[i].identifier == identifier) {
                return i;
            }
        }
        return index;
    }
    searchIndexByDescription(description) {
        let index = -1;
        for (let i = 0; i < this._products.length; i++) {
            if (this._products[i].description == description) {
                return i;
            }
        }
        return index;
    }
    consult(identifier) {
        let index = this.searchIndex(identifier);
        let searchedProduct;
        if (index != -1) {
            searchedProduct = this._products[index];
        }
        return searchedProduct;
    }
    delete(identifier) {
        let index = this.searchIndex(identifier);
        if (index != -1) {
            const indice = this.searchIndex(identifier);
            this._products.splice(indice, 1);
            return true;
        }
        return false;
    }
    writeOff(identifier, quantity) {
        let product = this.consult(identifier);
        if (product) {
            if (product instanceof perishableProduct_1.default) {
                product.writeOff(quantity);
                return true;
            }
            if (product instanceof
                product_1.default) {
                product.writeOff(quantity);
                return true;
            }
        }
        return false;
    }
    replanish(identifier, quantity) {
        let product = this.consult(identifier);
        if (product) {
            if (product instanceof perishableProduct_1.default) {
                product.replanish(quantity);
                return true;
            }
            if (product instanceof product_1.default) {
                product.replanish(quantity);
                return true;
            }
        }
        return false;
    }
    listProductsInStock() {
        for (let product of this._products) {
            console.log(product);
        }
    }
}
exports.default = Stock;
