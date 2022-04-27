import { Expresion } from "./expresion";
import { ambito } from "../simbolo/ambito";
import { Retorno, tipo } from "./retorno";
import {NodoAst} from "../simbolo/NodoAst";

export class Variable extends Expresion{
    constructor(private id:string,line:number, column:number ){
        super(line, column)
    }
    public ejecutar(ambito: ambito):Retorno {
            const aux = ambito.RetornarVal(this.id)
            if(aux != null) {
                return {valor:aux.valor, type:aux.tipo}
            }
            return { valor: null, type: tipo.NULL } ;
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('ID');
        nodo.agregarHijo(this.id);
        return nodo;
    }
}