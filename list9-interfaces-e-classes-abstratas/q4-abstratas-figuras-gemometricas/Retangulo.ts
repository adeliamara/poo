import { FiguraGeometrica } from "./FiguraGeometrica";


export class Retangulo extends FiguraGeometrica {

    calculaArea(): number {
        return this._base * this._altura;
    }

    calculaPerimetro(): number {
        return 2 * this._base + 2 * this._altura;
    }

}


