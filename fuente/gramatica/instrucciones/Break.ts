import { instruccion } from "./instruccion";
import { ambito } from "../simbolo/ambito";
import NodoAst from "../simbolo/NodoAst";

export class Break extends instruccion{
    constructor(fila:number, columna:number){
        super(fila, columna)
    }
    public ejecutar(ambito: ambito) {
        
        return{ tipo:"201701015B",fila:this.fila,columna:this.columna}
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('BREAK');
        nodo.agregarHijo('break');
        nodo.agregarHijo(';');
        return nodo;
    }
}