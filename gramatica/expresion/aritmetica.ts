import { Expresion } from "./expresion";
import { Retorno } from "./retorno";

export class Aritmetica extends Expresion {

    constructor(private izquierda: Expresion, private derecha: Expresion, private tipo: tipoArit, fila: number, columna: number) {
        super(fila, columna);
    }
    
    public ejecutar(): Retorno {
        const ValorIz = this.izquierda.ejecutar();
        const ValorDer = this.derecha.ejecutar();
        const Dom = this.tipoDom(ValorIz.type,ValorDer.type)
        return null;
    }
    
}
export enum tipoArit {
    SUMA,
    RESTA,
    MULTIPLICACION,
    DIVISION
}