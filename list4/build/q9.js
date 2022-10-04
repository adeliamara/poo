"use strict";
/*Crie uma classe chamada Jogador e nela:
a. Crie 3 atributos inteiros representando força, nível e pontos atuais;
b. Crie um construtor no qual os 3 parâmetros são passados e inicialize os
respectivos atributos;
c. Crie um método chamado calcularAtaque. Nele, calcule e retorne o valor da
multiplicação de força pelo nível. Esse resultado é o dano de ataque do
jogador;
d. Crie um método chamado atacar em que é passado um outro jogador
(atacado) como parâmetro. Nele e é feita a subtração do dano (método
calcularAtaque) dos pontos do atacado;
e. Crie um método chamado estaVivo que retorna true caso o atributo pontos
do jogador seja maior que zero e falso caso contrário.
f. Altere o método atacar para usar o método está vivo e desconsiderar a
operação, ou seja, não atacar, caso o jogador passado por parâmetro não
esteja vivo.
g. Crie um método chamado toString() que retorna a representação textual do
produto concatenando todos os seus atributos.
h. Avalie em com testes dois jogadores instanciados e inicializados através do
construtor. Utilize o método de ataque de cada jogador e ao final, verifique
qual jogador tem mais pontos.*/
class Jogador {
    constructor(forca = 10, nivel = 1, pontos_atuais = 0) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos_atuais = pontos_atuais;
    }
    calcularAtaque() {
        return this.forca * this.nivel;
    }
    atacar(jogador_atacado) {
        if (jogador_atacado.estaVivo()) {
            jogador_atacado.pontos_atuais -= this.calcularAtaque();
        }
        if (!jogador_atacado.estaVivo()) {
            jogador_atacado.pontos_atuais = 0;
        }
    }
    estaVivo() {
        return this.pontos_atuais > 0;
    }
    toString() {
        return `Jogador \n \tforça: ${this.forca}\n \tnivel: ${this.nivel} \n \tpontos atuais: ${this.pontos_atuais}`;
    }
}
let jogador1 = new Jogador(3, 10, 98);
let jogador2 = new Jogador(1, 4, 86);
console.log(jogador1.calcularAtaque());
console.log(jogador2.calcularAtaque());
jogador1.atacar(jogador2);
jogador1.atacar(jogador2);
jogador2.atacar(jogador1);
jogador1.atacar(jogador2);
jogador2.atacar(jogador1);
jogador2.atacar(jogador1);
jogador2.atacar(jogador1);
console.log(jogador1.toString());
console.log(jogador2.toString());
