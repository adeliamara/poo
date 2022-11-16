export abstract class FiguraGeometrica {
    protected _base: number;
    protected _altura: number;

    constructor(base: number, altura: number = base){
        this._base = base;
        this._altura = altura;
    }

    abstract calculaArea(): number;

    abstract calculaPerimetro(): number;
}