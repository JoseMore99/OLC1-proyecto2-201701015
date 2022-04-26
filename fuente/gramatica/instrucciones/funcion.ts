
import { tipo } from "../expresion/retorno"
import { ambito } from "../simbolo/ambito"
import NodoAst from "../simbolo/NodoAst"
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
        if(this.tipo==null){
            nodo.agregarHijo('void');
        }
        else if(this.tipo==tipo.NUMERO){
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
        nodo.agregarHijo('{');
        nodo.agregarHijoAST(this.contenido.getNodo());
        nodo.agregarHijo('}');
        return nodo;
    }
 }