"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputInvalidoError = void 0;
const AplicacaoError_1 = require("./AplicacaoError");
class InputInvalidoError extends AplicacaoError_1.AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.InputInvalidoError = InputInvalidoError;
