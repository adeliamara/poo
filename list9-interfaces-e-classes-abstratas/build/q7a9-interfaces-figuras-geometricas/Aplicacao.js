"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Quadrado_1 = require("./Quadrado");
const Retangulo_1 = require("./Retangulo");
const Triangulo_1 = require("./Triangulo");
class Aplicacao {
    main() {
        let quadradoA = new Quadrado_1.Quadrado(2);
        let quadradoB = new Quadrado_1.Quadrado(1.5);
        console.log(quadradoA.calculaArea());
        console.log(quadradoB.calculaPerimetro());
        console.log(`O quadrado a é maior que o b? ${quadradoA.comparar(quadradoB)}`);
        let trianguloA = new Triangulo_1.Triangulo(2, 3, 4, 5);
        let trianguloB = new Triangulo_1.Triangulo(6, 7, 8, 9);
        console.log(trianguloA.calculaArea());
        console.log(trianguloB.calculaArea());
        console.log(`O TRIANGULO a é maior que o b? ${trianguloA.comparar(trianguloB)}`);
        let retanguloA = new Retangulo_1.Retangulo(2, 3);
        let retanguloB = new Retangulo_1.Retangulo(3, 2);
        console.log(retanguloA.calculaArea());
        console.log(retanguloB.calculaArea());
        console.log(`O RETANGULO a é maior que o b? ${retanguloA.comparar(retanguloB)}`);
    }
}
let aplicacao = new Aplicacao();
aplicacao.main();
