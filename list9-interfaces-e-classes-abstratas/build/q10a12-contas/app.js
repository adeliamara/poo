"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuditoriaInterna_1 = require("./AuditoriaInterna");
const ContaCorrente_1 = require("./ContaCorrente");
const SeguroDevida_1 = require("./SeguroDevida");
class aplicacao {
    main() {
        let conta1 = new ContaCorrente_1.ContaCorrente('joao', 200);
        let conta2 = new ContaCorrente_1.ContaCorrente('paulo', 100);
        let conta3 = new ContaCorrente_1.ContaCorrente('mario', 1200);
        let seguro1 = new SeguroDevida_1.SeguroDeVida();
        let seguro2 = new SeguroDevida_1.SeguroDeVida();
        let auditoria = new AuditoriaInterna_1.AuditoriaInterna();
        auditoria.adicionar(conta1);
        auditoria.adicionar(conta2);
        auditoria.adicionar(conta3);
        auditoria.adicionar(seguro1);
        auditoria.adicionar(seguro2);
        console.log(auditoria.calculaTributos());
    }
}
let app = new aplicacao();
app.main();
