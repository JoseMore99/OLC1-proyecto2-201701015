import { instruccion } from "./instruccion";
import { ambito } from "../simbolo/ambito";
import { Expresion } from "../expresion/expresion";
import { tipo } from "../expresion/retorno";
import NodoAst from "../simbolo/NodoAst";

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
                ambito.AgregarVal(this.id.toLowerCase(), "", tipo.NUMERO)
            }
            else if(this.tipo==tipo.DECIMAL){
                ambito.AgregarVal(this.id.toLowerCase(), 0, tipo.NUMERO)
            }
            else if(this.tipo==tipo.CHAR){
                ambito.AgregarVal(this.id.toLowerCase(), '', tipo.NUMERO)
            }
            else if(this.tipo==tipo.BOOLEAN){
                ambito.AgregarVal(this.id.toLowerCase(), false, tipo.NUMERO)
            }
        }
        
        
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('DECLARACION');
        if(this.tipo==tipo.NUMERO){
           nodo.agregarHijo('int');
        }
        else if(this.tipo==tipo.STRING){
            nodo.agregarHijo('string');
        }
        else if(this.tipo==tipo.DECIMAL){
            nodo.agregarHijo('double');
        }
        else if(this.tipo==tipo.CHAR){
            nodo.agregarHijo('char');
        }
        else if(this.tipo==tipo.BOOLEAN){
            nodo.agregarHijo('boolean');
        }
        nodo.agregarHijo(this.id);
        nodo.agregarHijo('=');
        if(this.valor!=null){
            nodo.agregarHijoAST(this.valor.getNodo());
        }
        nodo.agregarHijo(';');
        return nodo;
    }
}