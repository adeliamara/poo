import { AplicacaoError } from "./AplicacaoError";

export class ContaJaExiste extends AplicacaoError {

    constructor(message: string) {
        super(message);
    }
    
}