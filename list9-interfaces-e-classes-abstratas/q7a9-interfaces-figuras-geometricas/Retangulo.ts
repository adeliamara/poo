import { Comparavel } from "./Comparavel";
import { FiguraGeometrica } from "./FiguraGeometrica";


export class Retangulo implements FiguraGeometrica, Comparavel{
    private _base: number;
    private _altura: number;
    
    constructor(base: number, altura: number){
        this._base = base;
        this._altura = altura;
    }

    calculaArea(): number {
        return this._base * this._altura;
    }

    calculaPerimetro(): number {
        return 2 * this._base + 2 * this._altura;
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


