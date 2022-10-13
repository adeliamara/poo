"use strict";
class Hora {
    constructor(_horas, _minutos, _segundos) {
        this._horas = _horas;
        this._minutos = _minutos;
        this._segundos = _segundos;
    }
    get horas() {
        return this._horas;
    }
    get minutos() {
        return this._minutos;
    }
    get segundos() {
        return this._segundos;
    }
    getHorario() {
        return `${this._horas}:${this._minutos}:${this._segundos}`;
    }
}
function main() {
    let hora1 = new Hora(20, 22, 21);
    console.log(hora1.horas); //22
    console.log(hora1.minutos); //24
    console.log(hora1.segundos); //21
    console.log(hora1.getHorario()); //22:24:21
}
main();
