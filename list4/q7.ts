/*Uma classe Equipamento com:
a. um atributo ligado (tipo boolean)
b. dois métodos liga() e desliga(). O método liga torna o atributo ligado true e
o método desliga torna o atributo ligado false.
c. Crie um método chamado inverte(), que muda o status atual (se ligado,
desliga...se desligado, liga)
d. Crie um método que estaLigado() que retorna o valor do atributo ligado
e. Altere o comportamento dos métodos liga para caso o equipamento já
esteja ligado, não ligue novamente. Faça o mesmo com o método desligar.
f. Instancie uma classe Equipamento e teste todos os seus métodos.*/

class Equipamento {
    ligado: boolean;

    constructor(ligado: boolean = false){
        this.ligado = ligado;
    }

    liga(): void {
        if(this.ligado == false){
            this.ligado = true;
        }
    }

    desliga(): void {
        if(this.ligado == true){
            this.ligado = false;
        }
    }

    inverte(): void {
        this.ligado = !this.ligado;
    }

    estaLigado(): boolean {
        return this.ligado;
    }
}

let equipamento1: Equipamento = new Equipamento(false);
console.log(equipamento1.estaLigado());
equipamento1.liga()
console.log(equipamento1.estaLigado());
equipamento1.liga()
console.log(equipamento1.estaLigado());
equipamento1.desliga()
console.log(equipamento1.estaLigado());
equipamento1.inverte();
console.log(equipamento1.estaLigado());