class Circulo {
    raio: number = 0;
 
    calcularArea(): number {
        return this.raio * (3.1495)**2;
    }

    calcularPerimetro(): number {
        return this.raio * (3.1495) * 2;
    }
}

let CirculoA = new Circulo
CirculoA.raio = 1;

const perimetroCirculo = CirculoA.calcularPerimetro()
const areaCirculo = CirculoA.calcularArea()

console.log(`Perimetro = ${perimetroCirculo}`)
console.log(`Area = ${areaCirculo}`)