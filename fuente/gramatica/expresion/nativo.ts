import { ambito } from "../simbolo/ambito";
import NodoAst from "../simbolo/NodoAst";
import { Expresion } from "./expresion";
import { Retorno, tipo } from "./retorno";

export class Nativo extends Expresion {

    constructor(private valor: any,private tipoN: tipoNat,  fila: number, columna: number) {
        super(fila, columna);
    }
    
    public ejecutar(ambito:ambito): Retorno {
        
        if(this.tipoN==tipoNat.NUMERO){
            return{valor:Number(this.valor),type:tipo.NUMERO}
        } else if(this.tipoN==tipoNat.DECIMAL){
            return{valor:Number(this.valor),type:tipo.DECIMAL}
        } else if (this.tipoN == tipoNat.STRING) {
            return { valor: this.valor.toString(), type: tipo.STRING };
        } else if(this.tipoN==tipoNat.CHAR){
            return { valor: this.valor.toString(), type: tipo.CHAR };
        }else if (this.tipoN ==tipoNat.BOOLEAN) {
            if (this.valor.toString().toLowerCase() == "true") {
                return { valor: true, type: tipo.BOOLEAN }
            }
            return { valor: false, type: tipo.BOOLEAN }
        }
        return { valor: null, type: tipo.NULL }
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('nativo');
        nodo.agregarHijo(this.valor.toString());
        return nodo;
    }
    }

export enum tipoNat {
    NUMERO ,
    STRING ,
    BOOLEAN,
    DECIMAL,
    CHAR,
    NULL 
}