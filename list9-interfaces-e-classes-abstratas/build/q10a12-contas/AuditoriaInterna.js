"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditoriaInterna = void 0;
class AuditoriaInterna {
    constructor(tributavel = []) {
        this._tributaveisList = tributavel;
    }
    adicionar(tributavel) {
        this._tributaveisList.push(tributavel);
    }
    calculaTributos() {
        const tributosTotais = this._tributaveisList.reduce((soma, atual) => soma + atual.calculaTributos(), 0);
        return tributosTotais;
    }
}
exports.AuditoriaInterna = AuditoriaInterna;
