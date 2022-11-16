"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorInvalidoException = void 0;
const AplicacaoError_1 = require("./AplicacaoError");
class ValorInvalidoException extends AplicacaoError_1.AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.ValorInvalidoException = ValorInvalidoException;
