import { Funcionario } from "./Funcionario";

class Diretor extends Funcionario{
    public getBonificacao(): number {
        return this.salario * 0.6; 
    }
}