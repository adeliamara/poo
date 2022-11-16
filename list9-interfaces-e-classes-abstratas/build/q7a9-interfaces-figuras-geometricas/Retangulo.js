"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = void 0;
class Retangulo {
    constructor(base, altura) {
        this._base = base;
        this._altura = altura;
    }
    calculaArea() {
        return this._base * this._altura;
    }
    calculaPerimetro() {
        return 2 * this._base + 2 * this._altura;
    }
    comparar(figuraGeometrica) {
        if (this.calculaArea() > figuraGeometrica.calculaArea()) {
            return 1;
        }
        else if (this.calculaArea() == figuraGeometrica.calculaArea()) {
            return 0;
        }
        return -1;
    }
}
exports.Retangulo = Retangulo;
