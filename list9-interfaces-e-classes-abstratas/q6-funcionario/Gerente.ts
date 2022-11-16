import { Funcionario } from "./Funcionario";

class Gerente extends Funcionario{
    public getBonificacao(): number {
        return this.salario * 0.4; 
    }
}