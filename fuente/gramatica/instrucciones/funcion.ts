import { Expresion } from "../expresion/expresion"
import { ambito } from "../simbolo/ambito"
import { instruccion } from "./instruccion"

 export class Funcion extends instruccion{

    constructor(private id:string, private contenido: instruccion, private parametros:Array<string>,fila: number, columna: number){
        super(fila,columna)
    }
    public ejecutar(ambito: ambito) {

    }
 }