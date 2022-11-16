"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = void 0;
const FiguraGeometrica_1 = require("./FiguraGeometrica");
class Triangulo extends FiguraGeometrica_1.FiguraGeometrica {
    constructor(base, altura, ladoB, ladoC) {
        super(base, altura);
        this._ladoB = ladoB;
        this._ladoC = ladoC;
    }
    calculaArea() {
        return (this._base * this._altura) / 2;
    }
    calculaPerimetro() {
        return this._base + this._ladoB + this._ladoC;
    }
}
exports.Triangulo = Triangulo;
