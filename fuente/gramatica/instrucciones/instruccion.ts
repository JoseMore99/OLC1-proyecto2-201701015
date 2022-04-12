import { ambito } from "../simbolo/ambito";

export abstract class instruccion {

    public fila: number;
    public columna: number;

    constructor(fila: number, columna: number) {
        this.fila = fila
        this.columna = columna
    }

    public abstract ejecutar(ambito:ambito):any;



}