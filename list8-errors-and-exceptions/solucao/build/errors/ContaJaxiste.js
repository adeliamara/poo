"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaJaExiste = void 0;
const AplicacaoError_1 = require("./AplicacaoError");
class ContaJaExiste extends AplicacaoError_1.AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.ContaJaExiste = ContaJaExiste;
