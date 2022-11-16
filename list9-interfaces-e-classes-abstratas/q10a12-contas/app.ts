import { AuditoriaInterna } from "./AuditoriaInterna";
import { ContaCorrente } from "./ContaCorrente";
import { SeguroDeVida } from "./SeguroDevida";

class aplicacao {
    public main(): void{
        let conta1: ContaCorrente = new ContaCorrente('joao', 200);
        let conta2: ContaCorrente = new ContaCorrente('paulo', 100);
        let conta3: ContaCorrente = new ContaCorrente('mario', 1200);


        let seguro1: SeguroDeVida = new SeguroDeVida();
        let seguro2: SeguroDeVida = new SeguroDeVida();


        let auditoria: AuditoriaInterna = new AuditoriaInterna();

        auditoria.adicionar(conta1);
        auditoria.adicionar(conta2);
        auditoria.adicionar(conta3);


        auditoria.adicionar(seguro1);
        auditoria.adicionar(seguro2);

        console.log(auditoria.calculaTributos());

    }
}


let app: aplicacao = new aplicacao();

app.main()


