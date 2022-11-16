"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoupancaInvalidaError = void 0;
const AplicacaoError_1 = require("./AplicacaoError");
class PoupancaInvalidaError extends AplicacaoError_1.AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.PoupancaInvalidaError = PoupancaInvalidaError;
