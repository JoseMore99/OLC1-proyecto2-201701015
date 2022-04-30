
import { tipo } from "../expresion/retorno"
import { ambito } from "../simbolo/ambito"
import {NodoAst} from "../simbolo/NodoAst"
import { simbolo } from "../simbolo/simbolo"
import { Declarar } from "./declarar"
import { instruccion } from "./instruccion"

 export class Funcion extends instruccion{

    constructor(public id:string, public contenido: instruccion, public parametros:Declarar[],public tipo:any, fila: number, columna: number){
        super(fila,columna)
    }
    public ejecutar(ambito: ambito) {
        ambito.AgregarFuncion(this.id,this)
        
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('FUNCION');
        nodo.agregarHijo('id');
        nodo.agregarHijo('(');
        for (const par of this.parametros) {
            nodo.agregarHijoAST(par.getNodo());
        }
        nodo.agregarHijo(')');
        nodo.agregarHijo(':');
        let tipoD="";
        if(this.tipo==null){
            nodo.agregarHijo('void');
            tipoD="void"
        }
        else if(this.tipo==tipo.NUMERO){
            nodo.agregarHijo('int');
            tipoD="int"
         }
         else if(this.tipo==tipo.STRING){
             nodo.agregarHijo('string');
             tipoD="string"
         }
         else if(this.tipo==tipo.DECIMAL){
             nodo.agregarHijo('double');
             tipoD="double"
         }
         else if(this.tipo==tipo.CHAR){
             nodo.agregarHijo('char');
             tipoD="char"
         }
         else if(this.tipo==tipo.BOOLEAN){
             nodo.agregarHijo('boolean');
             tipoD="boolean"
         }
        nodo.agregarHijo('{');
        nodo.agregarHijoAST(this.contenido.getNodo());
        nodo.agregarHijo('}');
        simbolo.Simbolos.push({id:this.id,tipo: tipoD, tipoO: "funcion", fila: this.fila, columna: this.columna})
        return nodo;
    }
 }