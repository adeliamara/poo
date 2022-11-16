import { AplicacaoError} from "./AplicacaoError";


export class InputInvalidoError extends AplicacaoError {
    constructor(message: string){
        super(message);
    }
}