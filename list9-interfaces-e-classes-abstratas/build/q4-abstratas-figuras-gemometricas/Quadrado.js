"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quadrado = void 0;
const Retangulo_1 = require("./Retangulo");
class Quadrado extends Retangulo_1.Retangulo {
    constructor(base) {
        super(base, base);
    }
}
exports.Quadrado = Quadrado;
