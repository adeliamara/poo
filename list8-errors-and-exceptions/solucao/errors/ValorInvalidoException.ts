import { AplicacaoError } from "./AplicacaoError";

export class ValorInvalidoException extends AplicacaoError {

    constructor(message: string) {
        super(message);
    }
    
}