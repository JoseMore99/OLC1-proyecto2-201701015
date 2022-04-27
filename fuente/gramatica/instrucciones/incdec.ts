
import { Expresion } from "../expresion/expresion";
import { ambito } from "../simbolo/ambito";
import {NodoAst} from "../simbolo/NodoAst";
import { instruccion } from "./instruccion";

export class Incdec extends instruccion {

    constructor(private iden:any,  private tipo: tipoA, fila: number, columna: number) {
        super(fila, columna);
    }
    
    public ejecutar(ambito:ambito) {
        const identificador=this.iden.id
        const aux = ambito.RetornarVal(identificador)
        if(aux != null) {
            if (this.tipo == tipoA.INCREMENTO){
                aux.valor++;
               // ambito.AgregarVal(identificador.toLowerCase(), aux.valor+1, aux.tipo)
            }else if (this.tipo == tipoA.DECREMENTO){
                aux.valor--;
                //ambito.AgregarVal(identificador.toLowerCase(), aux.valor-1, aux.tipo)
            }
        }
        return {valor:aux?.valor,type:aux?.tipo}
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('EXPRESION');
        nodo.agregarHijo(this.iden);
        if(this.tipo==tipoA.INCREMENTO){
            nodo.agregarHijo('+');
            nodo.agregarHijo('+');
        }
        else if(this.tipo==tipoA.DECREMENTO){
            nodo.agregarHijo('-');
            nodo.agregarHijo('-');
        }
        
        return nodo;
    }
    
}
export enum tipoA {
    INCREMENTO,
    DECREMENTO
}