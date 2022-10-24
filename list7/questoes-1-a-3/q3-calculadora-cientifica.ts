import Calculadora from "./q2-calculadora";

class CalculadoraCientifica extends Calculadora{
    constructor(operando1: number, operando2: number) {
       super(operando1, operando2);
    }

    public exponenciar(): number{
        return Math.pow(this.operando1, this.operando2);
    }

}
//como os atributos de calculadora são privados, foi necessário inserir o método get para que pudessemos acessar 
//estes atributos
function main(){
    let calculadora3: CalculadoraCientifica = new CalculadoraCientifica(4, 5);

    console.log(calculadora3);
    console.log(calculadora3.exponenciar());
}

main()



