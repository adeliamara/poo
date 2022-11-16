"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = require("./Funcionario");
class Diretor extends Funcionario_1.Funcionario {
    getBonificacao() {
        return this.salario * 0.6;
    }
}
