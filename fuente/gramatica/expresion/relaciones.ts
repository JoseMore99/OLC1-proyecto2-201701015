import { Expresion } from "./expresion";
import { Retorno, tipo } from "./retorno";
import { ambito } from "../simbolo/ambito";

export class Relacional extends Expresion {

    constructor(private izquierda: Expresion, private derecha: Expresion, private tipo: TipoRel, fila: number, columna: number) {
        super(fila, columna);
    }

    public ejecutar(ambito:ambito): Retorno {
        const ValorIz = this.izquierda.ejecutar(ambito);
        const ValorDer = this.derecha.ejecutar(ambito);
        if (this.tipo == TipoRel.IGUALIGUAL) {
            const result = ValorIz.valor == ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        } else if (this.tipo == TipoRel.DIFERENTE) {
            const result = ValorIz.valor != ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        } else if (this.tipo == TipoRel.MAYOR) {
            const result = ValorIz.valor > ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        } else if (this.tipo == TipoRel.MAYOR_IGUAL) {
            const result = ValorIz.valor >= ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        } else if (this.tipo == TipoRel.MENOR) {
            const result = ValorIz.valor < ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        } else if (this.tipo == TipoRel.MENOR_IGUAL) {
            const result = ValorIz.valor <= ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        }
         else if (this.tipo == TipoRel.AND) {
            const result = ValorIz.valor && ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        }
         else if (this.tipo == TipoRel.OR) {
            const result = ValorIz.valor || ValorDer.valor
            return { valor: result, type: tipo.BOOLEAN }
        }
         else if (this.tipo == TipoRel.NOT) {
            const result = !ValorDer.valor 
            return { valor: result, type: tipo.BOOLEAN }
        }
        return { valor: null, type: tipo.NULL }
    }
}

export enum TipoRel {
    AND,
    OR,
    IGUALIGUAL,
    DIFERENTE,
    MAYOR,
    MAYOR_IGUAL,
    MENOR,
    MENOR_IGUAL,
    NOT
}