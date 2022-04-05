import { Expresion } from "./expresion";
import { Retorno,tipo } from "./retorno";

export class Aritmetica extends Expresion {

    constructor(private izquierda: Expresion, private derecha: Expresion, private tipo: tipoArit, fila: number, columna: number) {
        super(fila, columna);
    }
    
    public ejecutar(): Retorno {
        const ValorIz = this.izquierda.ejecutar();
        const ValorDer = this.derecha.ejecutar();
        const Dom = this.tipoDom(ValorIz.type,ValorDer.type)
        if(this.tipo == tipoArit.SUMA){
            if (Dom == tipo.STRING) {
                return { valor: (ValorIz.valor.toString() + ValorDer.valor.toString()), type: tipo.STRING };
            }else if (Dom == tipo.NUMERO) {
                return { valor: (ValorIz.valor + ValorDer.valor), type: tipo.NUMERO };
            } 
            else {
                console.log("Error")
            }
        }else if (this.tipo == tipoArit.RESTA) {
            if (Dom == tipo.NUMERO) {
                return { valor: (ValorIz.valor - ValorDer.valor), type: tipo.NUMERO };
            } 
            else {
                console.log("Error")
            }
        }else if (this.tipo == tipoArit.MULTIPLICACION) {
            if (Dom == tipo.NUMERO) {
                return { valor: (ValorIz.valor * ValorDer.valor), type: tipo.NUMERO };
            } 
            else {
                console.log("Error")
            }
        }else if (this.tipo == tipoArit.DIVISION) {
            if (Dom == tipo.NUMERO) {
                if (ValorDer.valor == 0) {
                    console.log("Error")
                } 
                else {
                    return { valor: (ValorIz.valor / ValorDer.valor), type: tipo.NUMERO };
                }
            } 
            else {
                console.log("Error")
            }
        }
        return null;
    }
    
}
export enum tipoArit {
    SUMA,
    RESTA,
    MULTIPLICACION,
    DIVISION
}