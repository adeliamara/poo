"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = void 0;
const FiguraGeometrica_1 = require("./FiguraGeometrica");
class Retangulo extends FiguraGeometrica_1.FiguraGeometrica {
    calculaArea() {
        return this._base * this._altura;
    }
    calculaPerimetro() {
        return 2 * this._base + 2 * this._altura;
    }
}
exports.Retangulo = Retangulo;
