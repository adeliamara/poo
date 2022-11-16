import { Quadrado } from "./Quadrado";
import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";

class Aplicacao {
    public main(){
        let quadradoA: Quadrado = new Quadrado(2);
        let quadradoB: Quadrado = new Quadrado(1.5);

        console.log(quadradoA.calculaArea());
        console.log(quadradoB.calculaPerimetro());

        console.log(`O quadrado a é maior que o b? ${quadradoA.comparar(quadradoB)}`);


        let trianguloA: Triangulo = new Triangulo(2,3,4,5);
        let trianguloB: Triangulo = new Triangulo(6,7,8,9);

        console.log(trianguloA.calculaArea());
        console.log(trianguloB.calculaArea());

        console.log(`O TRIANGULO a é maior que o b? ${trianguloA.comparar(trianguloB)}`);


        let retanguloA: Retangulo = new Retangulo(2,3);
        let retanguloB: Retangulo = new Retangulo(3,2);

        console.log(retanguloA.calculaArea());
        console.log(retanguloB.calculaArea());

        console.log(`O RETANGULO a é maior que o b? ${retanguloA.comparar(retanguloB)}`);

    }
}

let aplicacao: Aplicacao = new Aplicacao();

aplicacao.main();