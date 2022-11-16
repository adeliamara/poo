import { Tributavel } from "./Tributavel";

export class SeguroDeVida implements Tributavel {


    public calculaTributos(): number {
        return 50;
    }
}