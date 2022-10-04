"use strict";
/* O construtor neste caso exige um argumento para volume.
Uma das soluções é definir um valor padrao para volume dentro do metodo, assim,
caso nao haja a passagem do argumento sera utilizado esse valor por default*/
class Radio {
    constructor(volume = 0) {
        this.volume = volume;
    }
}
let r = new Radio();
r.volume = 10;
