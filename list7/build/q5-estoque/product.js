"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(identifier, description, quantityProductsInStock, unitValue) {
        this._identifier = identifier;
        this._description = description;
        this._quantityProductsInStock = quantityProductsInStock;
        this._unitValue = unitValue;
    }
    writeOff(quantity) {
        if (quantity <= this._quantityProductsInStock) {
            this._quantityProductsInStock -= quantity;
            return true;
        }
        return false;
    }
    replanish(quantity) {
        this._quantityProductsInStock += quantity;
    }
    get identifier() {
        return this._identifier;
    }
    get description() {
        return this._description;
    }
    get quantityProductsInStock() {
        return this._quantityProductsInStock;
    }
    get unitValue() {
        return this._unitValue;
    }
    set description(newDescription) {
        this._description = newDescription;
    }
    set quantityProductsInStock(newQuantityProductsInStock) {
        this._quantityProductsInStock = newQuantityProductsInStock;
    }
    set unitValue(newUnitValue) {
        this._unitValue = newUnitValue;
    }
}
exports.default = Product;
