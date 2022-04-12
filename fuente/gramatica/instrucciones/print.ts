import { instruccion } from "./instruccion";
import { ambito } from "../simbolo/ambito";
import { Expresion } from "../expresion/expresion";

export class Print extends instruccion{
    constructor( private valor:Expresion, line:number, column:number){
        super(line, column)
    }
    public ejecutar(ambito: ambito) {
        const aux = this.valor.ejecutar(ambito) 
        console.log(aux.valor)
    }
}