# Exercicios

1. Podemos instanciar classes abstratas? Justifique.

Não podem ser instanciadas, mas podem ser herdadas. As classes abstratas são classes que possuem métodos abstratos, isto é, os métodos que não possuem implementação;

2. Explique o que é necessário para que a compilação da ClasseConcreta ocorra
sem erros:

~~~
abstract class ClasseAbstrata {
abstract imprimaAlgo(): void ;
}

class ClasseConcreta extends
ClasseAbstrata {
}
~~~ 

Para que a compilação de classe concreta ocorra sem erros, é necessário que ela implemente o método imprima algo da ClasseAbstrata.


3. Se uma classe que herda de uma abstrata e não implementa os seus métodos, o
que ocorre?

A classe que herdou deverá ser indicada como abstrata também. Caso contrário, haverá erro de compilação.

5. Não podemos aplicar o operador new em FiguraGeometrica, mas por que então podemos realizar o seguinte código de instanciação:

~~~
abstract class FiguraGeometrica {
//...
}
let figuras: FiguraGeometrica[] = new Array();
~~~

O array de FigurasGeometricas pode conter todas as classes concretas que herdam de FiguraGeometrica, como quadrado, retangulo, triangulo et