import { AplicacaoError } from "./AplicacaoError";

export class PoupancaInvalidaError extends AplicacaoError {

    constructor(message: string) {
        super(message);
    }
    
}