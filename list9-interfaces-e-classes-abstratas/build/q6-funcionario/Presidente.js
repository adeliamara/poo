"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = require("./Funcionario");
class Presidente extends Funcionario_1.Funcionario {
    getBonificacao() {
        return this.salario + 1000;
    }
}
