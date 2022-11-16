"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = void 0;
class Triangulo {
    constructor(base, altura, ladoB, ladoC) {
        this._base = base;
        this._altura = altura;
        this._ladoB = ladoB;
        this._ladoC = ladoC;
    }
    calculaArea() {
        return (this._base * this._altura) / 2;
    }
    calculaPerimetro() {
        return this._base + this._ladoB + this._ladoC;
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
exports.Triangulo = Triangulo;
