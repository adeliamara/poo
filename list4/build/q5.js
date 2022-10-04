"use strict";
/*5. Crie uma classe chamada Saudacao que:
a. Contenha um atributo chamado texto e outro chamado destinatario, ambos
String;
b. Crie um construtor que inicializa os dois atributos;
c. Crie um método obterSaudacao() que retorne a concatenação dos dois
atributos. Ex: "Bom dia, João";
d. Instancie uma classe Saudacao e teste seu método obterSaudacao().*/
class Saudacao {
    constructor(texto, destinatario) {
        this.destinatario = destinatario;
        this.texto = texto;
    }
    obterSaudacao() {
        return this.texto + ', ' + this.destinatario;
    }
}
let saudacao = new Saudacao("Bom dia", "Joao");
console.log(saudacao.obterSaudacao());
