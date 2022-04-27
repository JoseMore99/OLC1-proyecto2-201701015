import { Expresion } from "../expresion/expresion";
import { ambito } from "../simbolo/ambito";
import {NodoAst} from "../simbolo/NodoAst";
import { instruccion } from "./instruccion";


export class Case extends instruccion{

    constructor(public condicion:Expresion,private contenido: instruccion, fila: number, columna: number){
        super(fila,columna)
    }

    public ejecutar(ambito: ambito) {
        return this.contenido.ejecutar(ambito)
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('CASE');
        nodo.agregarHijo('case');
        nodo.agregarHijoAST(this.condicion.getNodo());
        nodo.agregarHijo(':');
        nodo.agregarHijoAST(this.contenido.getNodo());
        return nodo;
    }
}