/*Crie uma classe chamada Triangulo que:
a. Possua 3 atributos inteiros representando os lados;
b. Crie um método que retorna true se os lados formarem um triângulo de
acordo com a regra: |b-c| < a < b+c;
c. Crie 3 métodos: ehIsoceles(), ehEquilatero() e ehEscaleto() que retorne
verdadeiro caso o triângulo seja um dos tipos relacionados ao nome do
método. Eles devem chamar antes de tudo, o método da questão b. e
retornar false se esse método já retornar false também;
d. Instancie classes Triangulo de diferentes lados e seus métodos.*/

class Triangulo {
    lado1: number;
    lado2: number;
    lado3: number;

    constructor(lado1: number, lado2: number, lado3: number) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    ehTriangulo(): boolean {
        return (Math.abs(this.lado2 - this.lado3)) < this.lado1 && this.lado1 < this.lado2 + this.lado3;
    }

    ehIsosceles(): boolean {
        return this.ehTriangulo() &&
            (this.lado1 == this.lado2 || this.lado2 == this.lado3 || this.lado1 == this.lado3) &&
            !this.ehEquilatero();
    }

    ehEquilatero(): boolean {
        return this.ehTriangulo() &&
            this.lado1 == this.lado2 && this.lado2 == this.lado3;
    }

    ehEscaleno(): boolean {
        return this.ehTriangulo() &&
            !this.ehEquilatero() && !this.ehIsosceles();

    }




}



let t1: Triangulo = new Triangulo(1,2,3);
console.log(t1.ehTriangulo());
console.log(t1.ehIsosceles());
console.log(t1.ehEquilatero());
console.log(t1.ehEscaleno());
console.log();

let t2: Triangulo = new Triangulo(3,4,5);
console.log(t2.ehTriangulo());
console.log(t2.ehIsosceles());
console.log(t2.ehEquilatero());
console.log(t2.ehEscaleno());
console.log();

let t3: Triangulo = new Triangulo(6,6,6);
console.log(t3.ehTriangulo());
console.log(t3.ehIsosceles());
console.log(t3.ehEquilatero());
console.log(t3.ehEscaleno());
console.log();

let t4: Triangulo = new Triangulo(7,7,4);
console.log(t4.ehTriangulo());
console.log(t4.ehIsosceles());
console.log(t4.ehEquilatero());
console.log(t4.ehEscaleno());
console.log();

