"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
class PerishableProduct extends product_1.default {
    constructor(identifier, description, quantityProductsInStock, unitValue, expirationDate) {
        super(identifier, description, quantityProductsInStock, unitValue);
        this._expirationDate = new Date(expirationDate);
    }
    isValid() {
        const today = new Date();
        return today <= this._expirationDate;
    }
    writeOff(quantity) {
        if (this.isValid()) {
            if (quantity <= this.quantityProductsInStock) {
                this.quantityProductsInStock -= quantity;
                return true;
            }
        }
        return false;
    }
    replanish(quantity) {
        if (this.isValid()) {
            this.quantityProductsInStock += quantity;
            return true;
        }
        return false;
    }
    get expirationDate() {
        return this._expirationDate.toString();
    }
}
exports.default = PerishableProduct;
