import { Expresion } from "./expresion";
import { Retorno,tipo } from "./retorno";
import { ambito } from "../simbolo/ambito";

export class Aritmetica extends Expresion {

    constructor(private izquierda: Expresion, private derecha: Expresion, private tipo: tipoArit, fila: number, columna: number) {
        super(fila, columna);
    }
    
    public ejecutar(ambito:ambito): Retorno {
        const ValorIz = this.izquierda.ejecutar(ambito);
        const ValorDer = this.derecha.ejecutar(ambito);
        const Dom = this.tipoDom(ValorIz.type,ValorDer.type)
        if(this.tipo == tipoArit.SUMA){
            if (Dom == tipo.STRING) {
                return { valor: (ValorIz.valor.toString() + ValorDer.valor.toString()), type: tipo.STRING };
            }else if (Dom == tipo.NUMERO) {
                return { valor: (ValorIz.valor + ValorDer.valor), type: tipo.NUMERO };
            } 
            else {
                console.log("Error Semantico")
            }
        }else if (this.tipo == tipoArit.RESTA) {
            if (Dom == tipo.NUMERO) {
                return { valor: (ValorIz.valor - ValorDer.valor), type: tipo.NUMERO };
            } 
            else {
                console.log("Error Semantico")
            }
        }else if (this.tipo == tipoArit.MULTIPLICACION) {
            if (Dom == tipo.NUMERO) {
                return { valor: (ValorIz.valor * ValorDer.valor), type: tipo.NUMERO };
            } 
            else {
                console.log("Error Semantico")
            }
        }else if (this.tipo == tipoArit.DIVISION) {
            if (Dom == tipo.NUMERO) {
                if (ValorDer.valor == 0) {
                    console.log("Error Semantico")
                } 
                else {
                    return { valor: (ValorIz.valor / ValorDer.valor), type: tipo.NUMERO };
                }
            } 
            else {
                console.log("Error Semantico")
            }
        }
        return { valor: null, type: tipo.NULL } ;
    }
    
}
export enum tipoArit {
    SUMA,
    RESTA,
    MULTIPLICACION,
    DIVISION
}