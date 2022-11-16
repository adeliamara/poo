import { Conta } from "./Conta";
import { Tributavel } from "./Tributavel";

export class ContaCorrente extends Conta implements Tributavel {
   
    public calculaTributos(): number {
        return super.saldo * 0.1;
    }
}