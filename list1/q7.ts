class Retangulo {
    lado1: number = 0;
    lado2: number = 0;

    calcularArea(): number {
        return this.lado1 * this.lado2;
    }

    calcularPerimetro(): number {
        return this.lado1 * 2 +  this.lado2 * 2;
    }
}

let retanguloA = new Retangulo();
retanguloA.lado1 = 1;
retanguloA.lado2 = 12;

const perimetro = retanguloA.calcularPerimetro()
const area = retanguloA.calcularArea()

console.log(`Perimetro = ${perimetro}`)
console.log(`Area = ${area}`)