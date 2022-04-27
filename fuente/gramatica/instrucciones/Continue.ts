import { instruccion } from "./instruccion";
import { ambito } from "../simbolo/ambito";
import {NodoAst} from "../simbolo/NodoAst";

export class Continue extends instruccion{
    constructor(fila:number, columna:number){
        super(fila, columna)
    }
    public ejecutar(ambito: ambito) {
        
        return{ tipo:"201701015C",fila:this.fila,columna:this.columna}
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('CONTINUE');
        nodo.agregarHijo('continue');
        nodo.agregarHijo(';');
        return nodo;
    }
}