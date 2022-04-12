import { instruccion } from "./instruccion";
import { ambito } from "../simbolo/ambito";
import { Expresion } from "../expresion/expresion";

export class Declarar extends instruccion{
    constructor(private id:string, private valor:Expresion, line:number, column:number){
        super(line, column)
    }
    public ejecutar(ambito: ambito) {
        const aux = this.valor.ejecutar(ambito)
        //verificar tipos 
        ambito.AgregarVal(this.id, aux.valor, aux.type)
    }
}