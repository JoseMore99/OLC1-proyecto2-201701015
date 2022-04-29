import { Expresion } from "./expresion";
import { Retorno, tipo } from "./retorno";
import { ambito } from "../simbolo/ambito";
import {NodoAst} from "../simbolo/NodoAst";

export class Extras extends Expresion {

    constructor(private valor: Expresion,  private tipo: TipoFunc, fila: number, columna: number) {
        super(fila, columna);
    }

    public ejecutar(ambito:ambito): Retorno {
        const Valor = this.valor.ejecutar(ambito);
        if(this.tipo==TipoFunc.LOWER){
            return { valor: Valor.valor.toString().toLowerCase(), type: tipo.STRING }
        }
        else if(this.tipo==TipoFunc.UPPER){
            return { valor: Valor.valor.toString().toUpperCase(), type: tipo.STRING }
        }
        else if(this.tipo==TipoFunc.ROUND){
            return { valor: Math.round(Number(Valor.valor)), type: tipo.DECIMAL }
        }
        else if(this.tipo==TipoFunc.TOSTRING){
            return { valor: Valor.valor.toString(), type: tipo.STRING }
        }
        else if(this.tipo==TipoFunc.TYPEOF){
            return { valor: typeof Valor.valor, type: tipo.STRING }
        }
        else if(this.tipo==TipoFunc.LEN){
            return { valor: Valor.valor.toString().length, type: tipo.STRING }
        }
        return { valor: null, type: tipo.NULL }
    }
    public getNodo(): NodoAst {
        let nodo = new NodoAst('RELACION');
        nodo.agregarHijoAST(this.valor.getNodo());
     
        return nodo;
    }
}

export enum TipoFunc {
  LOWER,
  UPPER,
  ROUND,
  TYPEOF,
  TOSTRING,
  LEN
}