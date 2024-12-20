import { instruccion } from "./instruccion";
import { ambito } from "../simbolo/ambito";
import { Expresion } from "../expresion/expresion";
import { tipo } from "../expresion/retorno";
import {NodoAst} from "../simbolo/NodoAst";
import { simbolo } from "../simbolo/simbolo";

export class Declarar extends instruccion{
    constructor(public tipo:tipo ,public id:string, private valor:Expresion, fila:number, columna:number){
        super(fila, columna)
    }
    public ejecutar(ambito: ambito) {
        if (this.valor!=null){
            const aux = this.valor.ejecutar(ambito)
            //verificar tipos 
            if (this.tipo==tipo.NULL){
                ambito.AgregarVal(this.id.toLowerCase(), aux.valor, aux.type)
            }else if (this.tipo==aux.type){
                ambito.AgregarVal(this.id.toLowerCase(), aux.valor, aux.type)
            }
            else{
                console.log("ERROR SEMANTICO en declarar")
            }
        }else{
            if(this.tipo==tipo.NUMERO){
                ambito.AgregarVal(this.id.toLowerCase(), 0, tipo.NUMERO)
            }
            else if(this.tipo==tipo.STRING){
                ambito.AgregarVal(this.id.toLowerCase(), "", tipo.STRING)
            }
            else if(this.tipo==tipo.DECIMAL){
                ambito.AgregarVal(this.id.toLowerCase(), 0.0, tipo.DECIMAL)
            }
            else if(this.tipo==tipo.CHAR){
                ambito.AgregarVal(this.id.toLowerCase(), '', tipo.CHAR)
            }
            else if(this.tipo==tipo.BOOLEAN){
                ambito.AgregarVal(this.id.toLowerCase(), false, tipo.BOOLEAN)
            }
        }
        
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('DECLARACION');
        let tipoD=";"
        if(this.tipo==tipo.NUMERO){
           nodo.agregarHijo('int');
           tipoD="int";
        }
        else if(this.tipo==tipo.STRING){
            nodo.agregarHijo('string');
            tipoD="string";
        }
        else if(this.tipo==tipo.DECIMAL){
            nodo.agregarHijo('double');
            tipoD="double";
        }
        else if(this.tipo==tipo.CHAR){
            nodo.agregarHijo('char');
            tipoD="char";
        }
        else if(this.tipo==tipo.BOOLEAN){
            nodo.agregarHijo('boolean');
            tipoD="boolean";
        }
        nodo.agregarHijo(this.id);
        nodo.agregarHijo('=');
        if(this.valor!=null){
            nodo.agregarHijoAST(this.valor.getNodo());
            }
        simbolo.Simbolos.push({id:this.id,tipo: tipoD, tipoO: "variable", fila: this.fila, columna: this.columna})
        
        
        nodo.agregarHijo(';');
        return nodo;
    }
}