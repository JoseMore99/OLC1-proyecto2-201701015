import { instruccion } from "./instruccion";
import { ambito } from "../simbolo/ambito";
import { Expresion } from "../expresion/expresion";
import {NodoAst} from "../simbolo/NodoAst";

export class Return extends instruccion{
    constructor(private valor:Expresion|null,fila:number, columna:number){
        super(fila, columna)
    }
    public ejecutar(ambito: ambito) {
        
        return{ tipo:"201701015R",valor:this.valor,fila:this.fila,columna:this.columna}
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('RETURN');
        nodo.agregarHijo('return');
        if(this.valor!=null){
            nodo.agregarHijoAST(this.valor.getNodo())
        }
        nodo.agregarHijo(';');
        return nodo;
    }
}