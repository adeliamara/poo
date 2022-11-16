import { Tributavel } from "./Tributavel";

export class AuditoriaInterna implements Tributavel {
    private _tributaveisList: Array<Tributavel>;

    constructor(tributavel: Array<Tributavel> = []){
        this._tributaveisList = tributavel;
    }

    public adicionar(tributavel:Tributavel):void{
        this._tributaveisList.push(tributavel);
    }

    public calculaTributos(): number {
        const tributosTotais: number = this._tributaveisList.reduce((soma, atual) => soma + atual.calculaTributos(),0);
        return tributosTotais;
    }
}

