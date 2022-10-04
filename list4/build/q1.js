"use strict";
class Hotel {
    constructor(qtdReservas = 0) {
        this.quantReservas = qtdReservas;
    }
    adicionarReserva() {
        this.quantReservas++;
    }
}
let hotel = new Hotel(2);
console.log(hotel.quantReservas);
let hotel2 = new Hotel();
console.log(hotel.quantReservas);
