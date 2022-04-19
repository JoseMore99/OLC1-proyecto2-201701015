import { Expresion } from "../expresion/expresion";
import { ambito } from "../simbolo/ambito";
import { instruccion } from "./instruccion";


export class Case extends instruccion{

    constructor(public condicion:Expresion,private contenido: instruccion, fila: number, columna: number){
        super(fila,columna)
    }

    public ejecutar(ambito: ambito) {
        this.contenido.ejecutar(ambito)
    }
}