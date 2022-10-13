
class Hora {
    private _horas: number;
    private _minutos: number;
    private _segundos: number;

    constructor(_horas: number, _minutos: number, _segundos: number) {
        this._horas = _horas;
        this._minutos = _minutos;
        this._segundos = _segundos;
    }


    public get horas(): number {
        return this._horas;
    }
    public get minutos(): number {
        return this._minutos;
    }
    public get segundos(): number {
        return this._segundos;
    }

    public getHorario(): string {
        return `${this._horas}:${this._minutos}:${this._segundos}`;
    }

}


let hora1: Hora = new Hora(20, 22, 21);

console.log(hora1.horas) //22
console.log(hora1.minutos) //24
console.log(hora1.segundos) //21


