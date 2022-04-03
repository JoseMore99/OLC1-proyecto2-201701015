import { type } from "express/lib/response";
import { Expresion } from "./expresion";
import { Retorno, tipo } from "./retorno";

export class Nativo extends Expresion {

    constructor(private valor: any,private tipon: tipoNat,  fila: number, columna: number) {
        super(fila, columna);
    }
    
    public ejecutar(): Retorno {
        if(this.tipon==tipoNat.NUMERO){
            return{valor:Number(this.valor),type:tipo.NUMERO}
        } else if (this.tipon == tipoNat.STRING) {
            return { valor: this.valor.toString(), type: tipo.STRING };
        } else if (this.tipon ==tipoNat.BOOLEAN) {
            if (this.valor.toString().toLowerCase() == "true") {
                return { valor: true, type: tipo.BOOLEAN }
            }
            return { valor: false, type: tipo.BOOLEAN }
        }
        return null;
    }
}
export enum tipoNat {
    NUMERO,
    STRING,
    BOOLEAN,
    DOBLE
}