import { tipo,tipos,Retorno } from "./retorno";

export abstract class Expresion {

    public fila: number;
    public columna: number;

    constructor(fila: number, columna: number) {
        this.fila = fila
        this.columna = columna
    }

    public abstract ejecutar(): Retorno;


    public tipoDom(tipo1: tipo, tipo2: tipo): tipo {
        return tipos[tipo1][tipo2];
    }

}