import { Comparavel } from "./Comparavel";
import { FiguraGeometrica } from "./FiguraGeometrica";


export class Triangulo implements FiguraGeometrica, Comparavel {
    private _base: number;
    private _altura: number;
    private _ladoB: number;
    private _ladoC: number;

    constructor(base: number, altura: number, ladoB: number, ladoC: number){
        this._base = base;
        this._altura = altura;
        this._ladoB =  ladoB;
        this._ladoC = ladoC;
    }

    calculaArea(): number {
        return (this._base * this._altura)/2;
    }

    calculaPerimetro(): number {
        return this._base + this._ladoB + this._ladoC;
    }

    public comparar(figuraGeometrica: FiguraGeometrica): number {
        if(this.calculaArea() > figuraGeometrica.calculaArea()){
            return 1;
        } else if (this.calculaArea() == figuraGeometrica.calculaArea()){
            return 0;
        } 
        return -1;
    }

}
