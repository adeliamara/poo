import { FiguraGeometrica } from "./FiguraGeometrica";


export class Triangulo extends FiguraGeometrica {

    private _ladoB: number;
    private _ladoC: number;

    constructor(base: number, altura: number, ladoB: number, ladoC: number){
        super(base, altura)
        this._ladoB =  ladoB;
        this._ladoC = ladoC;
    }

    calculaArea(): number {
        return (this._base * this._altura)/2;
    }

    calculaPerimetro(): number {
        return this._base + this._ladoB + this._ladoC;
    }

}
